const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const DescriptorModel = sequelize.define('DescriptorModel', {
  // Model attributes are defined here
  descriptorId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  descriptorName: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(DescriptorModel === sequelize.models.DescriptorModel); // true