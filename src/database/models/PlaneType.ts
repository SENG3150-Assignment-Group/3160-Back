import sequelize from "../";
import { DataTypes, Model } from "sequelize";

interface PlaneTypeAttributes {
  PlaneCode: string;
  PlaneType: string;
  NumFirstClass: number;
  NumBusiness: number;
  NumPremiumEconomy: number;
  NumEconomy: number;
}

interface PlaneTypeInput extends PlaneTypeAttributes {}
interface PlaneTypeOutput extends Required<PlaneTypeAttributes> {}

class PlaneType
  extends Model<PlaneTypeAttributes, PlaneTypeInput>
  implements PlaneTypeAttributes
{
  PlaneCode!: string;
  PlaneType!: string;
  NumFirstClass!: number;
  NumBusiness!: number;
  NumPremiumEconomy!: number;
  NumEconomy!: number;
}

PlaneType.init(
  {
    PlaneCode: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    PlaneType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    NumFirstClass: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    NumBusiness: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    NumPremiumEconomy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    NumEconomy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    timestamps: false,
    modelName: "PlaneType",
  }
);

export { PlaneTypeInput, PlaneTypeOutput, PlaneType };
