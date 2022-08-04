const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const LocationDescriptorModel = sequelize.define('LocationDescriptorModel', {
  // Model attributes are defined here
  descriptorID: {
    type: DataTypes.STRING,
    allowNull: false
  },
  locationID: {
    type: DataTypes.STRING,
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
console.log(LocationDescriptorModel === sequelize.models.LocationDescriptorModel); // true

// class LocationDescriptorModel {
//     descriptorID: string;
//     locationID: string;
//     descriptorName: string;
  
//     constructor(
//       descriptorID: string,
//       locationID: string,
//       descriptorName: string,
//     ) {
//       this.descriptorID = descriptorID;
//       this.locationID = locationID;
//       this.descriptorName = descriptorName;
//     }
  
//     /*
//      * Static factory method
//      */
//     public static createLocationDescriptorModel = (
//       descriptorID: string,
//       locationID: string,
//       descriptorName: string,
//     ): LocationDescriptorModel => {
//       return new LocationDescriptorModel(
//         descriptorID,
//         locationID,
//         descriptorName,
//       );
//     };
  
//     /*
//      * Getters
//      */
//     public getDescriptorID = (): string => {
//       return this.descriptorID;
//     };
  
//     public getLocationID = (): string => {
//       return this.locationID;
//     };
  
//     public getDescriptorName = (): string => {
//       return this.descriptorName;
//     };
  
//     /*
//      * Setters
//      */
//     public setDescriptorID = (descriptorID: string) => {
//       this.descriptorID = descriptorID;
//     };
  
//     public setLocationID = (locationID: string) => {
//       this.locationID = locationID;
//     };
  
//     public setDescriptorName = (descriptorName: string) => {
//       this.descriptorName = descriptorName;
//     };
//   }
  
//   export default LocationDescriptorModel;
  