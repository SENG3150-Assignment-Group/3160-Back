'use strict';

import {
  Model, UUIDV4
} from 'sequelize';


interface DestinationPreferenceAttributes {
    PreferenceId: number;
    PreferenceName: string;
    AccountId: number;
    Weather: string;
    Environment: string;
    InterestAreas: string;
    Budget: number;     
}

module.exports = (sequelize: any, DataTypes: any) => {
  class DestinationPreference extends Model<DestinationPreferenceAttributes> 
  implements DestinationPreferenceAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     PreferenceId!: number;
     PreferenceName!: string;
     AccountId!: number;
     Weather!: string;
     Environment!: string;
     InterestAreas!: string;
     Budget!: number;
    static associate(models: any) {
      // define association here
   
    }
  };
  DestinationPreference.init({
    PreferenceId: {
      type: DataTypes.INTEGER,      
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    PreferenceName: {
      type: DataTypes.STRING,
      allowNull: false      
    },
    AccountId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Weather: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    Environment: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    InterestAreas: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    Budget: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'DestinationPreference',
  });
  return DestinationPreference;
};