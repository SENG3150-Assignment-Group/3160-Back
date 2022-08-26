import sequelize from "../";
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

interface AccountInput extends InferCreationAttributes<Account> {}
interface AccountOutput extends InferAttributes<Account> {}

class Account extends Model<AccountOutput, AccountInput> {
  AccountId!: CreationOptional<number>;
  FirstName!: string;
  LastName!: string;
  Email!: string;
  Password!: string;
  AccountType!: string;
  CreditCardNumber!: CreationOptional<string>;
  CreditCardDate!: CreationOptional<string>;
  CreditCardSecurity!: CreationOptional<string>;
}
Account.init(
  {
    AccountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
    AccountType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CreditCardNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CreditCardDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CreditCardSecurity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    timestamps: false,
    modelName: "Account",
  }
);

export { AccountInput, AccountOutput, Account };
