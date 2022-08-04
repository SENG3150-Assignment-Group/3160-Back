const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const LocationModel = sequelize.define('LocationModel', {
  // Model attributes are defined here
  locationCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  locationName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  airportCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  countryCode: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(LocationModel === sequelize.models.LocationModel); // true

// class LocationModel {
//     locationCode: string;
//     locationName: string;
//     airportCode: string;
//     countryCode: string;
  
//     constructor(
//       locationCode: string,
//       locationName: string,
//       airportCode: string,
//       countryCode: string,
//     ) {
//       this.locationCode = locationCode;
//       this.locationName = locationName;
//       this.airportCode = airportCode;
//       this.countryCode = countryCode;
//     }
  
//     /*
//      * Static factory method
//      */
//     public static createLocationModel = (
//       locationCode: string,
//       locationName: string,
//       airportCode: string,
//       countryCode: string,
//     ): LocationModel => {
//       return new LocationModel(
//         locationCode,
//         locationName,
//         airportCode,
//         countryCode,
//       );
//     };
  
//     /*
//      * Getters
//      */
//     public getLocationCode = (): string => {
//       return this.locationCode;
//     };
  
//     public getLocationName = (): string => {
//       return this.locationName;
//     };
  
//     public getAirportCode = (): string => {
//       return this.airportCode;
//     };
  
//     public getCountryCode = (): string => {
//       return this.countryCode;
//     };
  
//     /*
//      * Setters
//      */
//     public setLocationCode = (locationCode: string) => {
//       this.locationCode = locationCode;
//     };
  
//     public setLocationName = (locationName: string) => {
//       this.locationName = locationName;
//     };
  
//     public setAirportCode = (airportCode: string) => {
//       this.airportCode = airportCode;
//     };
  
//     public setCountryCode = (countryCode: string) => {
//       this.countryCode = countryCode;
//     };
//   }
  
//   export default LocationModel;
  