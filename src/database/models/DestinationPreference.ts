"use strict";

import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";

interface DestinationPreferenceAttributes {
  PreferenceId: number;
  PreferenceName: string;
  AccountId: number;
  Weather: string;
  Environment: string;
  InterestAreas: string;
  Budget: number;
}

export default (sequelize: any) => {
  class DestinationPreference
    extends Model<DestinationPreferenceAttributes>
    implements DestinationPreferenceAttributes
  {
    PreferenceId!: number;
    PreferenceName!: string;
    AccountId!: number;
    Weather!: string;
    Environment!: string;
    InterestAreas!: string;
    Budget!: number;
  }
  DestinationPreference.init(
    {
      PreferenceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      PreferenceName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      AccountId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      Weather: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      Environment: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      InterestAreas: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      Budget: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "DestinationPreference",
    }
  );
  return DestinationPreference;
};
