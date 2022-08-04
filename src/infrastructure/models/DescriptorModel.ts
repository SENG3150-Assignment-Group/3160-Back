const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const DescriptorModel = sequelize.define('DescriptorModel', {
  // Model attributes are defined here
  descriptorID: {
    type: DataTypes.STRING,
    allowNull: false
  },
  categoryID: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(DescriptorModel === sequelize.models.DescriptorModel); // true

// class DescriptorModel {
//     descriptorID: string;
//     categoryID: string;
//     name: string;
  
//     constructor(
//       descriptorID: string,
//       categoryID: string,
//       name: string,
//     ) {
//       this.descriptorID = descriptorID;
//       this.categoryID = categoryID;
//       this.name = name;
//     }
  
//     /*
//      * Static factory method
//      */
//     public static createDescriptorModel = (
//       descriptorID: string,
//       categoryID: string,
//       name: string,
//     ): DescriptorModel => {
//       return new DescriptorModel(
//         descriptorID,
//         categoryID,
//         name,
//       );
//     };
  
//     /*
//      * Getters
//      */
//     public getDescriptorID = (): string => {
//       return this.descriptorID;
//     };
  
//     public getCategoryID = (): string => {
//       return this.categoryID;
//     };
  
//     public getName = (): string => {
//       return this.name;
//     };
  
//     /*
//      * Setters
//      */
//     public setDescriptorID = (descriptorID: string) => {
//       this.descriptorID = descriptorID;
//     };
  
//     public setCategoryID = (categoryID: string) => {
//       this.categoryID = categoryID;
//     };
  
//     public setName = (name: string) => {
//       this.name = name;
//     };
//   }
  
//   export default DescriptorModel;
  