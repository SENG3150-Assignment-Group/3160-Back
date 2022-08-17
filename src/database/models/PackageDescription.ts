'use strict';

import {
  Model, UUIDV4
} from 'sequelize';

interface PackageDescriptionAttributes {
  DescriptorId: number;
  PackageId: number;

}

module.exports = (sequelize: any, DataTypes: any) => {
  class PackageDescription extends Model<PackageDescriptionAttributes> 
  implements PackageDescriptionAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     DescriptorId!: number;
     PackageId!: number;
    

    static associate(models: any) {
      // define association here
      
    }
  };
  PackageDescription.init({
    DescriptorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    PackageId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'PackageDescription',
  });
  return PackageDescription;
};