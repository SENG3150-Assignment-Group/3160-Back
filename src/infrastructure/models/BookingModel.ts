const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const BookingModel = sequelize.define('BookingModel', {
  // Model attributes are defined here
  bookingId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateCreated: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(BookingModel === sequelize.models.BookingModel); // true