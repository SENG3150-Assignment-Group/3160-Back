'use strict';

import {
  Model, UUIDV4
} from 'sequelize';


interface DescriptorAttributes {
    DescriptorId: number;
    CategoryId: number;
    Name: string;
    //TODO Name in database is descriptorName in domain 
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Descriptor extends Model<DescriptorAttributes> 
  implements DescriptorAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     DescriptorId!: number;
     CategoryId!: number;
     Name!: string;
    static associate(models: any) {
      // define association here
   
    }
  };
  Descriptor.init({
    DescriptorId: {
      type: DataTypes.STRING,      
      allowNull: false,
      primaryKey: true
    },
    CategoryId: {
      type: DataTypes.STRING,
      allowNull: false
      
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Descriptor',
  });
  return Descriptor;
};