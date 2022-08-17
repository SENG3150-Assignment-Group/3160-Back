"use strict";

import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";

interface LocationDescriptorAttributes {
  DescriptorId: number;
  LocationId: number;
}

export default (sequelize: any) => {
  class LocationDescriptor
    extends Model<LocationDescriptorAttributes>
    implements LocationDescriptorAttributes
  {
    DescriptorId!: number;
    LocationId!: number;
  }
  LocationDescriptor.init(
    {
      DescriptorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      LocationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "LocationDescriptor",
    }
  );
  return LocationDescriptor;
};
