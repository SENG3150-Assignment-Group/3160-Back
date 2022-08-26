import sequelize from "../";
import {
  DataTypes,
  Model,
  ForeignKey,
  CreationOptional,
  InferCreationAttributes,
  InferAttributes,
} from "sequelize";
import { Booking } from "./Booking";

interface InvoiceInput extends InferCreationAttributes<Invoice> {}
interface InvoiceOutput extends InferAttributes<Invoice> {}

class Invoice extends Model<InvoiceOutput, InvoiceInput> {
  TransactionId!: CreationOptional<number>;
  Date!: Date;
  CreditCardNumber!: string;
  Subtotal!: number;
  Tax!: number;
  RefundAmount!: number;
  BookingId!: ForeignKey<number>;
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
  },
  {
    sequelize: sequelize,
    timestamps: false,
    modelName: "Invoice",
  }
);

// An Invoice is made for one Booking
Invoice.belongsTo(Booking, {
  as: "Booking",
  foreignKey: {
    name: "BookingId",
    allowNull: false,
  },
});
// A Booking can have one Invoice
Booking.hasOne(Invoice, {
  as: "Invoice",
  foreignKey: {
    name: "BookingId",
    allowNull: false,
  },
});

export { InvoiceInput, InvoiceOutput, Invoice };
