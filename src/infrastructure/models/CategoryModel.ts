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
  firstcategoryIDName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(CategoryModel === sequelize.models.CategoryModel); // true

// class CategoryModel {
//     categoryID: string;
//     categoryName: string;
  
//     constructor(
//       categoryID: string,
//       categoryName: string,
//     ) {
//       this.categoryID = categoryID;
//       this.categoryName = categoryName;
//     }
  
//     /*
//      * Static factory method
//      */
//     public static createCategoryModel = (
//       categoryID: string,
//       categoryName: string,
//     ): CategoryModel => {
//       return new CategoryModel(
//         categoryID,
//         categoryName,
//       );
//     };
  
//     /*
//      * Getters
//      */
//     public getCategoryID = (): string => {
//       return this.categoryID;
//     };
  
//     public getCategoryName = (): string => {
//       return this.categoryName;
//     };
  
//     /*
//      * Setters
//      */
//     public setCategoryID = (categoryID: string) => {
//       this.categoryID = categoryID;
//     };
  
//     public setCategoryName = (categoryName: string) => {
//       this.categoryName = categoryName;
//     };
//   }
  
//   export default CategoryModel;
  