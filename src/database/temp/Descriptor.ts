"use strict";

import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";

interface DescriptorAttributes {
  DescriptorId: number;
  CategoryId: number;
  Name: string;
  //TODO Name in database is descriptorName in domain
}

export default (sequelize: any) => {
  class Descriptor
    extends Model<DescriptorAttributes>
    implements DescriptorAttributes
  {
    DescriptorId!: number;
    CategoryId!: number;
    Name!: string;
  }
  Descriptor.init(
    {
      DescriptorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Descriptor",
    }
  );
  return Descriptor;
};
