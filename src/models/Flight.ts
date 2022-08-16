'use strict';

import {
  Model, UUIDV4
} from 'sequelize';

//TODO StopOverId has been added to database, either implement throught other levels or remove
interface FlightAttributes {
  FlightCode: string;
  DepartureId: number;
  DepartureCode: string;
  DepartureDateTime: Date;    
  DestinationCode: string;
  DestinationId: number;
  DestinationDateTime: Date;    
  StopOverCode: string;
  StopOverId: number;
  AirlineCode: string;
  PlaneCode: string;
  Duration: Date;    
  NumSeats: number;     
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Flight extends Model<FlightAttributes> 
  implements FlightAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     FlightCode!: string;
     DepartureId!: number;
     DepartureCode!: string;
     DepartureDateTime!: Date;    
     DestinationCode!: string;
     DestinationId!: number;
     DestinationDateTime!: Date;    
     StopOverCode!: string;
     StopOverId!: number;
     AirlineCode!: string;
     PlaneCode!: string;
     Duration!: Date;    
     NumSeats!: number;
    static associate(models: any) {
      // define association here
 
    }
  };
  Flight.init({
    FlightCode: {
      type: DataTypes.STRING,      
      allowNull: false,
      primaryKey: true      
    },
    DepartureId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true                 
    },
    DepartureCode: {
        type: DataTypes.STRING,
        allowNull: false        
    },
    DepartureDateTime: {
        type: DataTypes.DATE,
        allowNull: false,
        primaryKey: true        
    },
    DestinationCode: {
        type: DataTypes.STRING,
        allowNull: false        
    },
    DestinationId: {
        type: DataTypes.STRING,
        allowNull: false        
    },
    DestinationDateTime: {
        type: DataTypes.DATE,
        allowNull: false        
    },
    StopOverCode: {
        type: DataTypes.STRING,
        allowNull: false        
    },
    StopOverId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true        
    },
    AirlineCode: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true        
    },
    PlaneCode: {
        type: DataTypes.STRING,
        allowNull: false        
    },
    Duration: {
        type: DataTypes.TIME, //TODO in database as time datatype, but number in domain level
        allowNull: false        
    },
    NumSeats: {
        type: DataTypes.INTEGER,
        allowNull: false        
    }
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};