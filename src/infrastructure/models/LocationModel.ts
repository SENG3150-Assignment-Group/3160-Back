const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const LocationModel = sequelize.define('LocationModel', {
  // Model attributes are defined here
  locationId: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  locationName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  countryCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  restricted: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  restrictionStart: {
    type: DataTypes.DATE,
    // allowNull defaults to true
  },
  restrictionEnd: {
    type: DataTypes.DATE,
    // allowNull defaults to true
  },
  popularity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(LocationModel === sequelize.models.LocationModel); // true