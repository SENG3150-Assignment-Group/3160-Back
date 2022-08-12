const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const PackageDescriptorModel = sequelize.define('PackageDescriptorModel', {
  // Model attributes are defined here
  descriptorId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  packageId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(PackageDescriptorModel === sequelize.models.PackageDescriptorModel); // true