"use strict";

import { Sequelize, DataTypes, Model, UUIDV4 } from "sequelize";

//TODO Country is not used in our class diagram. Either implement it or remove
interface CountryAttributes {
  CountryCode2: string;
  CountryCode3: string;
  CountryName: string;
  AlternateName1: string;
  AlternateName2: string;
  MotherCountryCode3: string;
  MotherCountryComment: string;
}

export default (sequelize: any) => {
  class Country extends Model<CountryAttributes> implements CountryAttributes {
    CountryCode2!: string;
    CountryCode3!: string;
    CountryName!: string;
    AlternateName1!: string;
    AlternateName2!: string;
    MotherCountryCode3!: string;
    MotherCountryComment!: string;
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
      AlternateName1: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      AlternateName2: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      MotherCountryCode3: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      MotherCountryComment: {
        type: DataTypes.STRING,
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
