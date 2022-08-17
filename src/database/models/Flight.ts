"use strict";

import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";

//TODO StopOverId has been added to database, either implement throught other levels or remove
interface FlightAttributes {
  FlightId: number;
  FlightCode: string;
  DepartureId: number;
  DepartureDateTime: Date;
  DestinationId: number;
  DestinationDateTime: Date;
  StopOverId: number;
  AirlineCode: string;
  PlaneCode: string;
  Duration: Date;
  NumSeats: number;
}

export default (sequelize: Sequelize) => {
  class Flight extends Model<FlightAttributes> implements FlightAttributes {
    FlightId!: number;
    FlightCode!: string;
    DepartureId!: number;
    DepartureDateTime!: Date;
    DestinationId!: number;
    DestinationDateTime!: Date;
    StopOverId!: number;
    AirlineCode!: string;
    PlaneCode!: string;
    Duration!: Date;
    NumSeats!: number;
  }
  Flight.init(
    {
      FlightId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      FlightCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      DepartureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      DepartureDateTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      DestinationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      DestinationDateTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      StopOverId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      AirlineCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PlaneCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Duration: {
        type: DataTypes.TIME, //TODO in database as time datatype, but number in domain level
        allowNull: false,
      },
      NumSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Flight",
    }
  );
  return Flight;
};
