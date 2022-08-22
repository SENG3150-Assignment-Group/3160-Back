"use strict";

import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";

interface AirlineAttributes {
  AirlineCode: string;
  AirlineName: string;
  CountryCode3: string;
  Sponsored: boolean;
}

export default (sequelize: any) => {
  class Airline extends Model<AirlineAttributes> implements AirlineAttributes {
    AirlineCode!: string;
    AirlineName!: string;
    CountryCode3!: string;
    Sponsored!: boolean;
  }
  Airline.init(
    {
      AirlineCode: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      AirlineName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      CountryCode3: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Sponsored: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Airline",
    }
  );
  return Airline;
};
