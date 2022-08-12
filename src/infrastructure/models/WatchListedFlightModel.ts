const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const WatchListedFlightModel = sequelize.define('WatchListedFlightModel', {
  // Model attributes are defined here
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  flightCode: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(WatchListedFlightModel === sequelize.models.WatchListedFlightModel); // true