const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const InvoiceModel = sequelize.define('InvoiceModel', {
  // Model attributes are defined here
  transactionId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  creditCardNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  subtotal: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tax: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  refundAmount: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(InvoiceModel === sequelize.models.InvoiceModel); // true