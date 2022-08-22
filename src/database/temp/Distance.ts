"use strict";

import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";

//TODO class is named Distance in domain and class diagram but Distances in database
interface DistanceAttributes {
  LocationId1: number;
  LocationId2: number;
  DistanceInKms: number;
}

export default (sequelize: any) => {
  class Distance
    extends Model<DistanceAttributes>
    implements DistanceAttributes
  {
    LocationId1!: number;
    LocationId2!: number;
    DistanceInKms!: number;
    static associate(models: any) {
      // define association here
    }
  }
  Distance.init(
    {
      LocationId1: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      LocationId2: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      DistanceInKms: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Distance",
    }
  );
  return Distance;
};
