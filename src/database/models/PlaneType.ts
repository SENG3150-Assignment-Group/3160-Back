"use strict";

import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";

interface PlaneTypeAttributes {
  PlaneCode: string;
  Type: string;
  NumFirstClass: number;
  NumBusiness: number;
  NumPremiumEconomy: number;
  NumEconomy: number;
}

export default (sequelize: any) => {
  class PlaneType
    extends Model<PlaneTypeAttributes>
    implements PlaneTypeAttributes
  {
    PlaneCode!: string;
    Type!: string;
    NumFirstClass!: number;
    NumBusiness!: number;
    NumPremiumEconomy!: number;
    NumEconomy!: number;
  }
  PlaneType.init(
    {
      PlaneCode: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      Type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      NumFirstClass: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      NumBusiness: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      NumPremiumEconomy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      NumEconomy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "PlaneType",
    }
  );
  return PlaneType;
};
