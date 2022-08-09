const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('PlaneTypeModel', {
  // Model attributes are defined here
  planeCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numFirstClass: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  numBusiness: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  numPremiumEconomy: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  numEconomy: {
    type: DataTypes.NUMBER,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(PlaneTypeModel === sequelize.models.PlaneTypeModel); // true