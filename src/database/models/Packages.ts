"use strict";

import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";

interface PackagesAttributes {
  PackageId: number;
  LocationCode: string;
  AccountId: number;
  Accomodation: string;
  AccomodationCost: number;
  FlightCodeList: string;
}

export default (sequelize: any) => {
  class Packages
    extends Model<PackagesAttributes>
    implements PackagesAttributes
  {
    PackageId!: number;
    LocationCode!: string;
    AccountId!: number;
    Accomodation!: string;
    AccomodationCost!: number;
    FlightCodeList!: string;
  }
  Packages.init(
    {
      PackageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      LocationCode: {
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
      FlightCodeList: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Packages",
    }
  );
  return Packages;
};
