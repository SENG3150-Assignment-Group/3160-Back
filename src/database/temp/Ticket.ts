"use strict";

import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";

interface TicketAttributes {
  TicketId: number;
  TicketCode: string;
  TicketClass: string;
  Price: number;
  Booked: boolean;
  Transferable: boolean;
  Exchangable: boolean;
  Refundable: boolean;
  AccountId?: number;
  PersonType?: string;
  SpecialRequests?: string;
  DietaryPreferences?: string;
  CarryOnBaggage: boolean;
  CheckedBaggage: boolean;
  FlightId: number;
  BookingId?: number;
}

export default (sequelize: any) => {
  class Ticket extends Model<TicketAttributes> implements TicketAttributes {
    TicketId!: number;
    TicketCode!: string;
    TicketClass!: string;
    Price!: number;
    Booked!: boolean;
    Transferable!: boolean;
    Exchangable!: boolean;
    Refundable!: boolean;
    AccountId!: number;
    PersonType!: string;
    SpecialRequests!: string;
    DietaryPreferences!: string;
    CarryOnBaggage!: boolean;
    CheckedBaggage!: boolean;
    FlightId!: number;
    BookingId!: number;
  }
  Ticket.init(
    {
      TicketId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      TicketCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      TicketClass: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      Booked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      Transferable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      Exchangable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      Refundable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      AccountId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      PersonType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      SpecialRequests: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      DietaryPreferences: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      CarryOnBaggage: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      CheckedBaggage: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      FlightId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      BookingId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Ticket",
    }
  );
  return Ticket;
};
