"use strict";

import { Sequelize, DataTypes, Model, Optional } from "sequelize";
import sequelize from "../";

//TODO StopOverId has been added to database, either implement throught other levels or remove
interface FlightAttributes {
  FlightId: number;
  FlightCode: string;
  DepartureId: number;
  DepartureDateTime: Date;
  DestinationId: number;
  DestinationDateTime: Date;
  StopOverId?: number;
  AirlineCode: string;
  PlaneCode: string;
  Duration: Date;
}

interface FlightInput
  extends Optional<FlightAttributes, "FlightId" | "StopOverId"> {}
interface FlightOutput extends Required<FlightAttributes> {}

class Flight
  extends Model<FlightAttributes, FlightInput>
  implements FlightAttributes
{
  public FlightId!: number;
  public FlightCode!: string;
  public DepartureId!: number;
  public DepartureDateTime!: Date;
  public DestinationId!: number;
  public DestinationDateTime!: Date;
  public StopOverId!: number;
  public AirlineCode!: string;
  public PlaneCode!: string;
  public Duration!: Date;
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
      allowNull: true,
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
  },
  {
    sequelize: sequelize,
    timestamps: false,
    modelName: "Flight",
  }
);

export { FlightInput, FlightOutput, Flight };
