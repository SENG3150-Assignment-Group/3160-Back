"use strict";

import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";

interface PackageAttributes {
  PackageId: number;
  LocationCode: string;
  FlightCode: string;
  AccountId: number;
  Accomodation: string;
  AccomodationCost: number;
  
}

export default (sequelize: any) => {
  class Package
    extends Model<PackageAttributes>
    implements PackageAttributes
  {
    PackageId!: number;
    LocationCode!: string;
    FlightCode!: string;
    AccountId!: number;
    Accomodation!: string;
    AccomodationCost!: number;
    
  }
  Package.init(
    {
      PackageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      LocationCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
       FlightCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      AccountId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Accomodation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      AccomodationCost: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
     
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Package",
    }
  );
  return Package;
};
