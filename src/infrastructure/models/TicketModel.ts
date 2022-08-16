const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const TicketModel = sequelize.define('TicketModel', {
  //Model attributes are defined here
  ticketId: {
    type: DataTypes.INTEGER,
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
  // booked: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false
  // },
  // transferrable: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false
  // },
  // exchangeable: {
  //   type: DataTypes.DATE,
  //   allowNull: false
  // },
  // refundable: {
  //   type: DataTypes.DATE,
  //   allowNull: false
  // },
  // name: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // },
  // personType: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // },
  // specialRequests: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // },
  // dietaryPreferences: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false
  // }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(TicketModel === sequelize.models.TicketModel); // true