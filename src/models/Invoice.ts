'use strict';

import {
  Model, UUIDV4
} from 'sequelize';

interface InvoiceAttributes {
  TransactionId: number;
  Date: Date;
  CreditCardNumber: string;
  Subtotal: number;
  Tax: number;
  RefundAmount: number;

}

module.exports = (sequelize: any, DataTypes: any) => {
  class Invoice extends Model<InvoiceAttributes> 
  implements InvoiceAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    TransactionId!: number;
    Date!: Date;
    CreditCardNumber!: string;
    Subtotal!: number;
    Tax!: number;
    RefundAmount!: number;
    

    static associate(models: any) {
      // define association here
      
    }
  };
  Invoice.init({
    TransactionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    CreditCardNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Subtotal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Tax: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    RefundAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Invoice',
  });
  return Invoice;
};