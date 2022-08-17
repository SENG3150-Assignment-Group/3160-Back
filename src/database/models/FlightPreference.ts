'use strict';

import {
  Model, UUIDV4
} from 'sequelize';


interface FlightPreferenceAttributes {
    PreferenceId: number;
    PreferenceName: string;
    AccountId: number;
    SeatClass: string;
    PriceMax: number;
    DepartureTime: Date;
    ArrivalTime: Date;
    NumberOfStops: number;
    CarryOnBaggage: boolean;
    CheckedBaggage: boolean;     
}

module.exports = (sequelize: any, DataTypes: any) => {
  class FlightPreference extends Model<FlightPreferenceAttributes> 
  implements FlightPreferenceAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     PreferenceId!: number;
    PreferenceName!: string;
    AccountId!: number;
    SeatClass!: string;
    PriceMax!: number;
    DepartureTime!: Date; //TODO departure and arrivaltime should be varchar in db to represent time preference "6:00am-12:00pm" etc
    ArrivalTime!: Date;   //TODO Change these datatypes back to string (Used date just to get sequalize working)
    NumberOfStops!: number;
    CarryOnBaggage!: boolean;
    CheckedBaggage!: boolean; 
    static associate(models: any) {
      // define association here
   
    }
  };
  FlightPreference.init({
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
    SeatClass: {
        type: DataTypes.STRING,
        allowNull: false               
    },
    PriceMax: {
        type: DataTypes.INTEGER,
        allowNull: false        
    },
    DepartureTime: {
        type: DataTypes.DATE,
        allowNull: false        
    },
    ArrivalTime: {
        type: DataTypes.DATE,
        allowNull: false        
    },
    NumberOfStops: {
        type: DataTypes.INTEGER,
        allowNull: false        
    },
    CarryOnBaggage: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false                
    },
    CheckedBaggage: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false                
    }
  }, {
    sequelize,
    modelName: 'FlightPreference',
  });
  return FlightPreference;
};