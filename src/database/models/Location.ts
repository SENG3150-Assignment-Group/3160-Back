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

interface LocationAttributes {
  LocationName: string;
  LocationCode: string;
  LocationId: number;
  Airport: string;
  Restricted: boolean;
  CountryCode3: string;
  RestrictionStart?: Date;
  RestrictionEnd?: Date;
}

interface LocationInput extends InferCreationAttributes<Location> {}
interface LocationOutput extends InferAttributes<Location> {}

class Location extends Model<LocationOutput, LocationInput> {
  LocationName!: string;
  LocationCode!: string;
  LocationId!: CreationOptional<number>;
  Airport!: string;
  Restricted!: boolean;
  CountryCode3!: ForeignKey<string>;
  RestrictionStart!: CreationOptional<Date>;
  RestrictionEnd!: CreationOptional<Date>;
}

Location.init(
  {
    LocationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    LocationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LocationCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Airport: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Restricted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    RestrictionStart: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    RestrictionEnd: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize: sequelize,
    timestamps: false,
    modelName: "Location",
  }
);

/*
 * Locations are part of a country
 */
Location.belongsTo(Country, {
  foreignKey: {
    name: "CountryCode3",
    allowNull: false,
  },
});

// Countries have many locations
Country.hasMany(Location, {
  foreignKey: {
    name: "CountryCode3",
    allowNull: false,
  },
});

export { LocationInput, LocationOutput, Location };
