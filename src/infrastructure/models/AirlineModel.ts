const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('AirlineModel', {
  // Model attributes are defined here
  airlineCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  airlineName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  countryCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sponsored: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(AirlineModel === sequelize.models.AirlineModel); // true