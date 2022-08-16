'use strict';

import {
  Model, UUIDV4
} from 'sequelize';

interface WishListedLocationAttributes {
  AccountId: number;
  LocationId: number;
  DateAdded: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class WishListedLocation extends Model<WishListedLocationAttributes> 
  implements WishListedLocationAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    AccountId!: number;
    LocationId!: number;
    DateAdded!: Date;
    static associate(models: any) {
      // define association here
      
    }
  };
  WishListedLocation.init({
    AccountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    LocationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DateAdded: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'WishListedLocation',
  });
  return WishListedLocation;
};