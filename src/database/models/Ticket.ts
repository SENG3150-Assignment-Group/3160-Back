import sequelize from "../";
import {
  DataTypes,
  Model,
  CreationOptional,
  ForeignKey,
  InferCreationAttributes,
  InferAttributes,
} from "sequelize";
import { Flight } from "./Flight";
import { Booking } from "./Booking";

interface TicketInput extends InferCreationAttributes<Ticket> {}
interface TicketOutput extends InferAttributes<Ticket> {}

class Ticket extends Model<TicketOutput, TicketInput> {
  TicketCode!: string;
  TicketClass!: string;
  Price!: number;
  Booked!: CreationOptional<boolean>;
  Transferable!: CreationOptional<boolean>;
  Exchangable!: CreationOptional<boolean>;
  Refundable!: CreationOptional<boolean>;
  PersonName!: CreationOptional<string>;
  PersonType!: CreationOptional<string>;
  SpecialRequests!: CreationOptional<string>;
  DietaryPreferences!: CreationOptional<string>;
  CarryOnBaggage!: CreationOptional<boolean>;
  CheckedBaggage!: CreationOptional<boolean>;
  FlightId!: ForeignKey<number>;
  BookingId!: CreationOptional<ForeignKey<number>>;
}
Ticket.init(
  {
    TicketCode: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
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
      defaultValue: false,
    },
    Transferable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    Exchangable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    Refundable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    PersonName: {
      type: DataTypes.STRING,
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
      defaultValue: true,
    },
    CheckedBaggage: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize: sequelize,
    timestamps: false,
    modelName: "Ticket",
  }
);

// There are many Tickets for one Flight
Ticket.belongsTo(Flight, {
  as: "Flight",
  foreignKey: {
    name: "FlightId",
    allowNull: false,
  },
});
// A flight releases many Tickets
Flight.hasMany(Ticket, {
  as: "Tickets",
  foreignKey: {
    name: "FlightId",
    allowNull: false,
  },
});

// A Ticket may be part of one Booking
Ticket.belongsTo(Booking, {
  as: "Booking",
  foreignKey: {
    name: "BookingId",
    allowNull: true,
  },
});
// A Booking can have many Tickets
Booking.hasMany(Ticket, {
  as: "Tickets",
  foreignKey: {
    name: "BookingId",
    allowNull: true,
  },
});

export { TicketOutput, TicketInput, Ticket };
