const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const TravelPackageModel = sequelize.define('TravelPackageModel', {
  // Model attributes are defined here
  packageId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  locationCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  flightCode: {
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
console.log(TravelPackageModel === sequelize.models.TravelPackageModel); // true