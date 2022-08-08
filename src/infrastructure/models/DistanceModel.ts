const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const DistanceModel = sequelize.define('DistanceModel', {
  // Model attributes are defined here
  locationId1: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  locationId2: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  distanceInKms: {
    type: DataTypes.NUMBER,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(DistanceModel === sequelize.models.DistanceModel); // true