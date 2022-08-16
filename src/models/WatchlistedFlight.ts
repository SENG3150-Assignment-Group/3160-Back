'use strict';

import {
  Model, UUIDV4
} from 'sequelize';

interface WatchListedFlightAttributes {
  AccountId: number;
  FlightCode: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class WatchListedFlight extends Model<WatchListedFlightAttributes> 
  implements WatchListedFlightAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    AccountId!: number;
    FlightCode!: string;
    static associate(models: any) {
      // define association here
      
    }
  };
  WatchListedFlight.init({
    AccountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    FlightCode: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'WatchListedFlight',
  });
  return WatchListedFlight;
};