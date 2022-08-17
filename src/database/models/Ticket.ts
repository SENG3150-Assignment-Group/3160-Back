'use strict';

import {
  Model, UUIDV4
} from 'sequelize';

interface TicketAttributes {
  TicketCode: string;
  TicketClass: string;
  Price: number;
  Booked: boolean;
  Transferable: boolean;
  Exchangable: boolean;
  Refundable: boolean;
  AccountId: number;
  PersonType: string;
  SpecialRequests: string;
  DietaryPreferences: string;
  CarryOnBaggage: boolean;
  CheckedBaggage: boolean;

}

module.exports = (sequelize: any, DataTypes: any) => {
  class Ticket extends Model<TicketAttributes> 
  implements TicketAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    TicketCode!: string;
    TicketClass!: string;
    Price!: number;
    Booked!: boolean;
    Transferable!: boolean;
    Exchangable!: boolean;
    Refundable!: boolean;
    AccountId!: number;
    PersonType!: string;
    SpecialRequests!: string;
    DietaryPreferences!: string;
    CarryOnBaggage!: boolean;
    CheckedBaggage!: boolean;

    static associate(models: any) {
      // define association here
      
    }
  };
  Ticket.init({
    TicketCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TicketClass: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Booked: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Transferable: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Exchangable: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Refundable: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    AccountId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PersonType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SpecialRequests: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DietaryPreferences: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CarryOnBaggage: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    CheckedBaggage: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};