const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const LocationDescriptorModel = sequelize.define('LocationDescriptorModel', {
  // Model attributes are defined here
  descriptorId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  locationId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(LocationDescriptorModel === sequelize.models.LocationDescriptorModel); // true