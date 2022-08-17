"use strict";

import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";

interface WishListedLocationAttributes {
  AccountId: number;
  LocationId: number;
  DateAdded: Date;
}

export default (sequelize: any) => {
  class WishListedLocation
    extends Model<WishListedLocationAttributes>
    implements WishListedLocationAttributes
  {
    AccountId!: number;
    LocationId!: number;
    DateAdded!: Date;
  }
  WishListedLocation.init(
    {
      AccountId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      LocationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      DateAdded: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "WishListedLocation",
    }
  );
  return WishListedLocation;
};
