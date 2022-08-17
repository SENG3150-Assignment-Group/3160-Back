'use strict';

import {
  Model, UUIDV4
} from 'sequelize';

interface AirlineAttributes {
    AirlineCode: string;
    AirlineName: string;
    CountryCode3: string;
    Sponsored: boolean;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Airline extends Model<AirlineAttributes> 
  implements AirlineAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    AirlineCode!: string;
    AirlineName!: string;
    CountryCode3!: string;
    Sponsored!: boolean;
    static associate(models: any) {
      // define association here
     
    }
  };
  Airline.init({
    AirlineCode: {
      type: DataTypes.STRING,      
      allowNull: false,
      primaryKey: true
    },
    AirlineName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CountryCode3: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      Sponsored: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Airline',
  });
  return Airline;
};