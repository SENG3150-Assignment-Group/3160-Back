"use strict";

import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";

//TODO Country is not used in our class diagram. Either implement it or remove
interface CountryAttributes {
  CountryCode2: string;
  CountryCode3: string;
  CountryName: string;
  AlternativeName1: string;
  AlternativeName2: string;
}

export default (sequelize: any) => {
  class Country extends Model<CountryAttributes> implements CountryAttributes {
    CountryCode2!: string;
    CountryCode3!: string;
    CountryName!: string;
    AlternativeName1!: string;
    AlternativeName2!: string;
  }
  Country.init(
    {
      CountryCode2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      CountryCode3: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      CountryName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },
      AlternativeName1: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },
      AlternativeName2: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Country",
    }
  );
  return Country;
};
