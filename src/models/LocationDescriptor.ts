'use strict';

import {
  Model, UUIDV4
} from 'sequelize';

interface LocationDescriptorAttributes {
  DescriptorId: number;
  LocationId: number;

}

module.exports = (sequelize: any, DataTypes: any) => {
  class LocationDescriptor extends Model<LocationDescriptorAttributes> 
  implements LocationDescriptorAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     DescriptorId!: number;
     LocationId!: number;
    

    static associate(models: any) {
      // define association here
      
    }
  };
  LocationDescriptor.init({
    DescriptorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    LocationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'LocationDescriptor',
  });
  return LocationDescriptor;
};