const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const DistanceModel = sequelize.define('DistanceModel', {
  // Model attributes are defined here
  locationCode1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  locationCode2: {
    type: DataTypes.STRING,
    allowNull: false
  },
  distance: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(DistanceModel === sequelize.models.DistanceModel); // true

// class DistanceModel {
//     locationCode1: string;
//     locationCode2: string;
//     distance: string;
  
//     constructor(
//       locationCode1: string,
//       locationCode2: string,
//       distance: string,
//     ) {
//       this.locationCode1 = locationCode1;
//       this.locationCode2 = locationCode2;
//       this.distance = distance;
//     }
  
//     /*
//      * Static factory method
//      */
//     public static createDistanceModel = (
//       locationCode1: string,
//       locationCode2: string,
//       distance: string,
//     ): DistanceModel => {
//       return new DistanceModel(
//         locationCode1,
//         locationCode2,
//         distance,
//       );
//     };
  
//     /*
//      * Getters
//      */
//     public getLocationCode1 = (): string => {
//       return this.locationCode1;
//     };
  
//     public getLocationCode2 = (): string => {
//       return this.locationCode2;
//     };
  
//     public getDistance = (): string => {
//       return this.distance;
//     };
  
//     /*
//      * Setters
//      */
//     public setLocationCode1 = (locationCode1: string) => {
//       this.locationCode1 = locationCode1;
//     };
  
//     public setLocationCode2 = (locationCode2: string) => {
//       this.locationCode2 = locationCode2;
//     };
  
//     public setDistance = (distance: string) => {
//       this.distance = distance;
//     };
//   }
  
//   export default DistanceModel;
  