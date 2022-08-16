'use strict';

import {
  Model, UUIDV4
} from 'sequelize';

interface PlaneTypeAttributes {
  PlaneCode: string;
  Type: string;
  NumFirstClass: number;
  NumBusiness: number;
  NumPremiumEconomy: number;
  NumEconomy: number;

}

module.exports = (sequelize: any, DataTypes: any) => {
  class PlaneType extends Model<PlaneTypeAttributes> 
  implements PlaneTypeAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     PlaneCode!: string;
     Type!: string;
     NumFirstClass!: number;
     NumBusiness!: number;
     NumPremiumEconomy!: number;
     NumEconomy!: number;
    

    static associate(models: any) {
      // define association here
      
    }
  };
  PlaneType.init({
    PlaneCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    NumFirstClass: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NumBusiness: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NumPremiumEconomy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NumEconomy: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'PlaneType',
  });
  return PlaneType;
};