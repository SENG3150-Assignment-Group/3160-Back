'use strict';

import {
  Model, UUIDV4
} from 'sequelize';

interface LocationDescriptorAttributes {
  LocationName: string;
  LocationCode: string;
  LocationId: number;
  Airport: string;
  Restricted: boolean;
  CountryCode3: string;
  RestricationStart: Date;
  RestricationEnd: Date;

}

module.exports = (sequelize: any, DataTypes: any) => {
  class Location extends Model<LocationDescriptorAttributes> 
  implements LocationDescriptorAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    LocationName!: string;
    LocationCode!: string;
    LocationId!: number;
    Airport!: string;
    Restricted!: boolean;
    CountryCode3!: string;
    RestricationStart!: Date;
    RestricationEnd!: Date;
    

    static associate(models: any) {
      // define association here
      
    }
  };
  Location.init({
    LocationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LocationCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LocationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Airport: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Restricted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    CountryCode3: {
      type: DataTypes.STRING,
      allowNull: false
    },
    RestricationStart: {
      type: DataTypes.DATE,
      allowNull: false
    },
    RestricationEnd: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};