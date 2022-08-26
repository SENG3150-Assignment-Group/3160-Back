import sequelize from "../";
import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { Country } from "./Country";

interface AirlineAttributes {
  AirlineCode: string;
  AirlineName: string;
  CountryCode3: string;
  Sponsored?: boolean;
}

interface AirlineInput extends InferCreationAttributes<Airline> {}
interface AirlineOutput extends InferAttributes<Airline> {}

class Airline extends Model<AirlineOutput, AirlineInput> {
  AirlineCode!: string;
  AirlineName!: string;
  CountryCode3!: ForeignKey<string>;
  Sponsored!: CreationOptional<boolean>;
}

Airline.init(
  {
    AirlineCode: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    AirlineName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Sponsored: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize: sequelize,
    timestamps: false,
    modelName: "Airline",
  }
);

// An Airline is a corporation in a Country
Airline.belongsTo(Country, {
  as: "Country",
  foreignKey: {
    name: "CountryCode3",
    allowNull: false,
  },
});
// A Country can have many Airline corporations
Country.hasMany(Airline, {
  as: "Airlines",
  foreignKey: {
    name: "CountryCode3",
    allowNull: false,
  },
});

export { AirlineInput, AirlineOutput, Airline };
