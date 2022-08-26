"use strict";

import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";

interface WatchListedFlightAttributes {
  AccountId: number;
  FlightCode: string;
}

export default (sequelize: any) => {
  class WatchListedFlight
    extends Model<WatchListedFlightAttributes>
    implements WatchListedFlightAttributes
  {
    AccountId!: number;
    FlightCode!: string;
  }
  WatchListedFlight.init(
    {
      AccountId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      FlightCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "WatchListedFlight",
    }
  );
  return WatchListedFlight;
};
