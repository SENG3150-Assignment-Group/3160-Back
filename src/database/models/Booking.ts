import sequelize from "../";
import {
  DataTypes,
  Model,
  ForeignKey,
  InferCreationAttributes,
  InferAttributes,
  CreationOptional,
} from "sequelize";
import { Account } from "./Account";
import State from "../../domain/State";

interface BookingInput extends InferCreationAttributes<Booking> {}
interface BookingOutput extends InferAttributes<Booking> {}

class Booking extends Model<BookingOutput, BookingInput> {
  BookingId!: CreationOptional<number>;
  AccountId!: ForeignKey<number>;
  Email!: string;
  DateCreated!: Date;
  State!: State;
}
Booking.init(
  {
    BookingId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
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
      type: DataTypes.ENUM("confirmed", "passed", "cancelled"),
      allowNull: false,
      defaultValue: "confirmed",
    },
  },
  {
    sequelize: sequelize,
    timestamps: false,
    modelName: "Booking",
  }
);

// Bookings are made in the name of one Account
Booking.belongsTo(Account, {
  as: "Account",
  foreignKey: {
    name: "AccountId",
    allowNull: true,
  },
});

// Accounts can have many Bookings
Account.hasMany(Booking, {
  as: "Bookings",
  foreignKey: {
    name: "AccountId",
    allowNull: true,
  },
});

export { BookingInput, BookingOutput, Booking };
