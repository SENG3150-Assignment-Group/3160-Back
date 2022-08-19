"use strict";

import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";

interface LocationAttributes {
  LocationName: string;
  LocationCode: string;
  LocationId: number;
  Airport: string;
  Restricted: boolean;
  CountryCode3: string;
  RestricationStart: Date;
  RestricationEnd: Date;
}

export default (sequelize: any) => {
  class Location
    extends Model<LocationAttributes>
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
      RestricationStart: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      RestricationEnd: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Location",
    }
  );
  return Location;
};
