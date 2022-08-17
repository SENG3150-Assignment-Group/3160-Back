'use strict';

import {
  Model, UUIDV4
} from 'sequelize';

interface PackagesAttributes {
  PackageId: number;
  LocationCode: string;
  AccountId: number;
  Accomodation: string;
  AccomodationCost: number;
  FlightCodeList: string;

}

module.exports = (sequelize: any, DataTypes: any) => {
  class Packages extends Model<PackagesAttributes> 
  implements PackagesAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     PackageId!: number;
     LocationCode!: string;
     AccountId!: number;
     Accomodation!: string;
     AccomodationCost!: number;
     FlightCodeList!: string;
    

    static associate(models: any) {
      // define association here
      
    }
  };
  Packages.init({
    PackageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    LocationCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    AccountId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Accomodation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    AccomodationCost: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    FlightCodeList: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Packages',
  });
  return Packages;
};