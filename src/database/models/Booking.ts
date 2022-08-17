'use strict';

import {
  Model, UUIDV4
} from 'sequelize';

interface BookingAttributes {
    BookingId: number;
    AccountId: number;
    Email: string;
    DateCreated: Date;
    State: number;  
    //TODO State is an enum in class diagram but int(1) in database
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Booking extends Model<BookingAttributes> 
  implements BookingAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     BookingId!: number;
     AccountId!: number;
     Email!: string;
     DateCreated!: Date;
     State!: number;
    static associate(models: any) {
      // define association here
   
    }
  };
  Booking.init({
    BookingId: {
      type: DataTypes.INTEGER,      
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    AccountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false        
      },
      DateCreated: {
      type: DataTypes.DATE,
      allowNull: false      
    },
    State: {
        type: DataTypes.INTEGER,
        allowNull: false      
      }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};