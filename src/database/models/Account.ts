import sequelize from "../";
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import AccountType from "../../domain/AccountType";

interface AccountInput extends InferCreationAttributes<Account> {}
interface AccountOutput extends InferAttributes<Account> {}

class Account extends Model<AccountOutput, AccountInput> {
  AccountId!: CreationOptional<number>;
  AccountType!: AccountType;
  FirstName!: string;
  LastName!: string;
  Email!: string;
  Password!: string;
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
    AccountType: {
      type: DataTypes.ENUM("admin", "user", "travelAgent", "staff"),
      allowNull: false,
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
      allowNull: true,
    },
    CreditCardDate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CreditCardSecurity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: sequelize,
    timestamps: false,
    modelName: "Account",
  }
);

export { AccountInput, AccountOutput, Account };
