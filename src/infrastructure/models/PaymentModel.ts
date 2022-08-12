const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const PaymentModel = sequelize.define('PaymentModel', {
  // Model attributes are defined here
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  creditCardNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  creditCardDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  creditCardSecurity: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(PaymentModel === sequelize.models.PaymentModel); // true