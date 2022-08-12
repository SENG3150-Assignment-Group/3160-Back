const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const WishListedLocationModel = sequelize.define('WishListedLocationModel', {
  // Model attributes are defined here
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  locationCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateAdded: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(WishListedLocationModel === sequelize.models.WishListedLocationModel); // true