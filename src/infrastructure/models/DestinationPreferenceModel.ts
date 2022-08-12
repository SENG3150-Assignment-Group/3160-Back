const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const DestinationPreferenceModel = sequelize.define('DestinationPreferenceModel', {
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
    type: DataTypes.STRING,
    allowNull: false
  },
  weather: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  environment: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  interestAreas: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  budget: {
    type: DataTypes.INTEGER,
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(DestinationPreferenceModel === sequelize.models.DestinationPreferenceModel); // true