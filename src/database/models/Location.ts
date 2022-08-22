"use strict";
import sequelize from "../";
import { DataTypes, Model, Optional } from "sequelize";

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

interface LocationInput
  extends Optional<
    LocationAttributes,
    "LocationId" | "RestrictionStart" | "RestrictionEnd"
  > {}
interface LocationOutput extends Required<LocationAttributes> {}

class Location
  extends Model<LocationAttributes, LocationInput>
  implements LocationAttributes
{
  LocationName!: string;
  LocationCode!: string;
  LocationId!: number;
  Airport!: string;
  Restricted!: boolean;
  CountryCode3!: string;
  RestricationStart!: Date;
  RestricationEnd!: Date;
}

Location.init(
  {
    LocationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    LocationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LocationCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    Airport: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Restricted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    CountryCode3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    RestrictionStart: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    RestrictionEnd: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize: sequelize,
    timestamps: false,
    modelName: "Location",
  }
);

export { LocationInput, LocationOutput, Location };
