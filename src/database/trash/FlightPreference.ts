"use strict";

import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";

interface FlightPreferenceAttributes {
  PreferenceId: number;
  PreferenceName: string;
  AccountId: number;
  SeatClass: string;
  PriceMax: number;
  DepartureTime: Date;
  ArrivalTime: Date;
  NumberOfStops: number;
  CarryOnBaggage: boolean;
  CheckedBaggage: boolean;
}

export default (sequelize: any) => {
  class FlightPreference
    extends Model<FlightPreferenceAttributes>
    implements FlightPreferenceAttributes
  {
    PreferenceId!: number;
    PreferenceName!: string;
    AccountId!: number;
    SeatClass!: string;
    PriceMax!: number;
    DepartureTime!: Date; //TODO departure and arrivaltime should be varchar in db to represent time preference "6:00am-12:00pm" etc
    ArrivalTime!: Date; //TODO Change these datatypes back to string (Used date just to get sequalize working)
    NumberOfStops!: number;
    CarryOnBaggage!: boolean;
    CheckedBaggage!: boolean;
  }
  FlightPreference.init(
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
      SeatClass: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PriceMax: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      DepartureTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      ArrivalTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      NumberOfStops: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      CarryOnBaggage: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      CheckedBaggage: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "FlightPreference",
    }
  );
  return FlightPreference;
};
