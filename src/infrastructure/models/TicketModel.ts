const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const TicketModel = sequelize.define('TicketModel', {
  // Model attributes are defined here
//   ticketId: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   ticket: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   destinationCode: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   departureId: {
//     type: DataTypes.NUMBER,
//     allowNull: false
//   },
//   destinationId: {
//     type: DataTypes.NUMBER,
//     allowNull: false
//   },
//   departureDateTime: {
//     type: DataTypes.DATE,
//     allowNull: false
//   },
//   destinationDateTime: {
//     type: DataTypes.DATE,
//     allowNull: false
//   },
//   stopOverCode: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   airlineCode: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   planeCode: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   duration: {
//     type: DataTypes.NUMBER,
//     allowNull: false
//   },
//   numSeats: {
//     type: DataTypes.NUMBER,
//     allowNull: false
//   }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(TicketModel === sequelize.models.TicketModel); // true