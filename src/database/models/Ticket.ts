"use strict";

import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";

interface TicketAttributes {
  TicketCode: string;
  TicketClass: string;
  Price: number;
  Booked: boolean;
  Transferable: boolean;
  Exchangable: boolean;
  Refundable: boolean;
  AccountId: number;
  PersonType: string;
  SpecialRequests: string;
  DietaryPreferences: string;
  CarryOnBaggage: boolean;
  CheckedBaggage: boolean;
}

export default (sequelize: any) => {
  class Ticket extends Model<TicketAttributes> implements TicketAttributes {
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
  }
  Ticket.init(
    {
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
        allowNull: false,
      },
      PersonType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      SpecialRequests: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      DietaryPreferences: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      CarryOnBaggage: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      CheckedBaggage: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
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
