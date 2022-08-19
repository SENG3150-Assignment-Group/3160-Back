"use strict";

import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";

interface PackageDescriptionAttributes {
  DescriptorId: number;
  PackageId: number;
}

export default (sequelize: any) => {
  class PackageDescription
    extends Model<PackageDescriptionAttributes>
    implements PackageDescriptionAttributes
  {
    DescriptorId!: number;
    PackageId!: number;
  }
  PackageDescription.init(
    {
      DescriptorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      PackageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "PackageDescription",
    }
  );
  return PackageDescription;
};
