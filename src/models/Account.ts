 'use strict';

import {
  Model, UUIDV4
} from 'sequelize';

interface AccountAttributes {
    AccountId: number;
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Account extends Model<AccountAttributes> 
  implements AccountAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     AccountId!: number;
     FirstName!: string;
     LastName!: string;
     Email!: string;
     Password!: string;
    static associate(models: any) {
      // define association here
    
    }
  };
  Account.init({
    AccountId: {
      type: DataTypes.INTEGER,      
      allowNull: false,
      primaryKey: true
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }, 
    Password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};