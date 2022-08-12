const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const HolidayPackageModel = sequelize.define('HolidayPackageModel', {
  // Model attributes are defined here
  packageId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  locationCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  accomodation: {
    type: DataTypes.STRING,
    allowNull: false
  },
  accomodationCost: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(HolidayPackageModel === sequelize.models.HolidayPackageModel); // true