import sequelize from "../";
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

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

interface CountryInput extends InferCreationAttributes<Country> {}
interface CountryOutput extends InferAttributes<Country> {}

class Country extends Model<CountryOutput, CountryInput> {
  CountryCode2!: string;
  CountryCode3!: string;
  CountryName!: string;
  AlternateName1!: CreationOptional<string>;
  AlternateName2!: CreationOptional<string>;
  MotherCountryCode3!: CreationOptional<string>;
  MotherCountryComment!: CreationOptional<string>;
}
Country.init(
  {
    CountryCode2: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    CountryCode3: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
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
    sequelize: sequelize,
    timestamps: false,
    modelName: "Country",
  }
);

export { CountryInput, CountryOutput, Country };
