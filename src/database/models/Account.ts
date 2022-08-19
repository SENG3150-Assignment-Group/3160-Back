"use strict";

import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";

interface AccountAttributes {
  AccountId: number;
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  CreditCardNumber: string;
  CreditCardDate: Date;
  CreditCardSecurity: string;
}

export default (sequelize: Sequelize) => {
  class Account extends Model<AccountAttributes> implements AccountAttributes {
    AccountId!: number;
    FirstName!: string;
    LastName!: string;
    Email!: string;
    Password!: string;
    CreditCardNumber!: string;
    CreditCardDate!: Date;
    CreditCardSecurity!: string;
  }
  Account.init(
    {
      AccountId: {
        type: DataTypes.INTEGER, 
        allowNull: false,       
        primaryKey: true,
      },
      FirstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      LastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      CreditCardNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      CreditCardDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      CreditCardSecurity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Account",
    }
  );
  return Account;
};
