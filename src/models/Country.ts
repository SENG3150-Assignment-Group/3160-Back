'use strict';

import {
  Model, UUIDV4
} from 'sequelize';

//TODO Country is not used in our class diagram. Either implement it or remove
interface CountryAttributes {
    CountryCode2: string;
    CountryCode3: string;
    CountryName: string;
    AlternativeName1: string;
    AlternativeName2: string;
    MotherCountryCode3: string;
    MotherCountryComment: string;   
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Country extends Model<CountryAttributes> 
  implements CountryAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    CountryCode2!: string;
    CountryCode3!: string;
    CountryName!: string;
    AlternativeName1!: string;
    AlternativeName2!: string;
    MotherCountryCode3!: string;
    MotherCountryComment!: string;
    
    static associate(models: any) {
      // define association here
    
    }
  };
  Country.init({
    CountryCode2: {
      type: DataTypes.STRING,      
      allowNull: false
    },
    CountryCode3: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    CountryName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""     
      },
      AlternativeName1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""      
    },
    AlternativeName2: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""      
      },
    MotherCountryCode3: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""      
      },
    MotherCountryComment: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: ""      
        }
  }, {
    sequelize,
    modelName: 'Country',
  });
  return Country;
};