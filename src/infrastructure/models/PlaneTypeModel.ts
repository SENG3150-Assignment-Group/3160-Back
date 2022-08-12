const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const PlaneTypeModel = sequelize.define('PlaneTypeModel', {
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
    type: DataTypes.INTEGER,
    allowNull: false
  },
  numBusiness: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  numPremiumEconomy: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  numEconomy: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(PlaneTypeModel === sequelize.models.PlaneTypeModel); // true