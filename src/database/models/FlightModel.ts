import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) =>
  sequelize.define(
    "FlightModel",
    {
      // Model attributes are defined here
      flightId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      flightCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      departureCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      destinationCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      departureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      destinationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      departureDateTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      destinationDateTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      stopOverCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stopOverId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      airlineCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      planeCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      numSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "Flight",
      timestamps: false,
    }
  );
