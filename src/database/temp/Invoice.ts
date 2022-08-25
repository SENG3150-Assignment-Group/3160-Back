"use strict";

import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";

interface InvoiceAttributes {
  TransactionId: number;
  Date: Date;
  CreditCardNumber: string;
  Subtotal: number;
  Tax: number;
  RefundAmount: number;
  BookingId: number;
}

export default (sequelize: any) => {
  class Invoice extends Model<InvoiceAttributes> implements InvoiceAttributes {
    TransactionId!: number;
    Date!: Date;
    CreditCardNumber!: string;
    Subtotal!: number;
    Tax!: number;
    RefundAmount!: number;
    BookingId!: number;
  }
  Invoice.init(
    {
      TransactionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      Date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      CreditCardNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Subtotal: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      Tax: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      RefundAmount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      BookingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Invoice",
    }
  );
  return Invoice;
};
