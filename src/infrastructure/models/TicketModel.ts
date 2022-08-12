const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('TicketModel', {
  // Model attributes are defined here
  ticketCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ticketClass: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  booked: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  transferrable: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  exchangeable: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  refundable: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  personType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  specialRequests: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dietaryPreferences: {
    type: DataTypes.STRING,
    allowNull: false
  },
  carryOnBaggage: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  checkedBaggage: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(TicketModel === sequelize.models.TicketModel); // true