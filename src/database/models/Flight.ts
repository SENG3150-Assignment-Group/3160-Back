import {
  DataTypes,
  Model,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import sequelize from "../";
import { Airline } from "./Airline";
import { Location } from "./Location";
import { PlaneType } from "./PlaneType";

interface FlightInput extends InferCreationAttributes<Flight> {}
interface FlightOutput extends InferAttributes<Flight> {}

class Flight extends Model<FlightOutput, FlightInput> {
  public FlightId!: CreationOptional<number>;
  public FlightCode!: string;
  public DepartureId!: ForeignKey<number>;
  public DepartureDateTime!: Date;
  public DestinationId!: ForeignKey<number>;
  public DestinationDateTime!: Date;
  public StopOverId!: CreationOptional<ForeignKey<number>>;
  public AirlineCode!: ForeignKey<string>;
  public PlaneCode!: ForeignKey<string>;
  public Duration!: string;
}

Flight.init(
  {
    FlightId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    FlightCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DepartureDateTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    DestinationDateTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Duration: {
      type: DataTypes.STRING, //TODO in database as time datatype, but number in domain level
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    timestamps: false,
    modelName: "Flight",
  }
);

// Flights have a departure location
Flight.belongsTo(Location, {
  as: "Departure",
  foreignKey: {
    name: "DepartureId",
    allowNull: false,
  },
});

// Locations have many departing flights
Location.hasMany(Flight, {
  as: "Departures",
  foreignKey: {
    name: "DepartureId",
    allowNull: false,
  },
});

// Flights have a destination location
Flight.belongsTo(Location, {
  as: "Destination",
  foreignKey: {
    name: "DestinationId",
    allowNull: false,
  },
});

// Locations have many incoming flights
Location.hasMany(Flight, {
  as: "Destinations",
  foreignKey: {
    name: "DestinationId",
    allowNull: false,
  },
});

// Flights may have a stopover location
Flight.belongsTo(Location, {
  as: "StopOver",
  foreignKey: {
    name: "StopOverId",
    allowNull: true,
  },
});

// Locations can have many stopover flights
Location.hasMany(Flight, {
  as: "StopOvers",
  foreignKey: {
    name: "StopOverId",
    allowNull: true,
  },
});

// Flights are scheduled by an Airline
Flight.belongsTo(Airline, {
  as: "Airline",
  foreignKey: {
    name: "AirlineCode",
    allowNull: false,
  },
});

// Airlines schedule many flights
Airline.hasMany(Flight, {
  as: "Flights",
  foreignKey: {
    name: "AirlineCode",
    allowNull: false,
  },
});

// Flights are conducted by a plane of a certain PlaneType
Flight.belongsTo(PlaneType, {
  as: "PlaneType",
  foreignKey: {
    name: "PlaneCode",
    allowNull: false,
  },
});

// planes of a PlaneTypes conduct many flights
PlaneType.hasMany(Flight, {
  as: "Flights",
  foreignKey: {
    name: "PlaneCode",
    allowNull: false,
  },
});

export { FlightInput, FlightOutput, Flight };
