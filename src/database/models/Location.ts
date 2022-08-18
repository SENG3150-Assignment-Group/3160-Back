"use strict";

import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";

interface LocationDescriptorAttributes {
  LocationName: string;
  LocationId: number;
  AirportCode: string;
  Restricted: boolean;
  CountryCode3: string;
  RestricationStart: Date;
  RestricationEnd: Date;
}

export default (sequelize: any) => {
  class Location
    extends Model<LocationDescriptorAttributes>
    implements LocationDescriptorAttributes
  {
    LocationName!: string;
    LocationId!: number;
    AirportCode!: string;
    Restricted!: boolean;
    CountryCode3!: string;
    RestricationStart!: Date;
    RestricationEnd!: Date;
  }
  Location.init(
    {
      LocationName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      LocationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      AirportCode: {
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
