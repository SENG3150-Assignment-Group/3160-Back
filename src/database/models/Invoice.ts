"use strict";

import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";

interface InvoiceAttributes {
  TransactionId: number;
  Date: Date;
  CreditCardNumber: string;
  Subtotal: number;
  Tax: number;
  RefundAmount: number;
}

export default (sequelize: any) => {
  class Invoice extends Model<InvoiceAttributes> implements InvoiceAttributes {
    TransactionId!: number;
    Date!: Date;
    CreditCardNumber!: string;
    Subtotal!: number;
    Tax!: number;
    RefundAmount!: number;
  }
  Invoice.init(
    {
      TransactionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
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
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Invoice",
    }
  );
  return Invoice;
};
