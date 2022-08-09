/* const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true */

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('CategoryModel', {
  // Model attributes are defined here
  flightCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  departureCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  destinationCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  departureId: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  destinationId: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  departureDateTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  destinationDateTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  stopOverCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  airlineCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  planeCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  duration: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  numSeats: {
    type: DataTypes.NUMBER,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(CategoryModel === sequelize.models.CategoryModel); // true