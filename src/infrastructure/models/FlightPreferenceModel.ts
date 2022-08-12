const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const FlightPreferenceModel = sequelize.define('FlightPreferenceModel', {
  // Model attributes are defined here
  preferenceId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  preferenceName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  seatClass: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  airlineCode: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  priceMax: {
    type: DataTypes.INTEGER,
    // allowNull defaults to true
  },
  departureTime: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  arrivalTime: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  numberOfStops: {
    type: DataTypes.INTEGER,
    // allowNull defaults to true
  },
  carryOnBaggage: {
    type: DataTypes.BOOLEAN,
    // allowNull defaults to true
  },
  checkedBaggage: {
    type: DataTypes.BOOLEAN,
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(FlightPreferenceModel === sequelize.models.FlightPreferenceModel); // true