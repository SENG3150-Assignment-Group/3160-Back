"use strict";

import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";

interface BookingAttributes {
  BookingId: number;
  AccountId: number;
  Email: string;
  DateCreated: Date;
  State: number;
  //TODO State is an enum in class diagram but int(1) in database
}

export default (sequelize: any) => {
  class Booking extends Model<BookingAttributes> implements BookingAttributes {
    BookingId!: number;
    AccountId!: number;
    Email!: string;
    DateCreated!: Date;
    State!: number;
  }
  Booking.init(
    {
      BookingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      AccountId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      DateCreated: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      State: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Booking",
    }
  );
  return Booking;
};
