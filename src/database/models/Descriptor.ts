import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import sequelize from "../";

interface DescriptorAttributes {
  DescriptorId: number;
  CategoryId: number;
  Name: string;
}

interface DescriptorInput extends InferCreationAttributes<Descriptor> {}
interface DescriptorOutput extends InferAttributes<Descriptor> {}

class Descriptor extends Model<DescriptorOutput, DescriptorInput> {
  DescriptorId!: number;
  CategoryId!: number;
  Name!: string;
}
Descriptor.init(
  {
    DescriptorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    timestamps: false,
    modelName: "Descriptor",
  }
);

export { DescriptorInput, DescriptorOutput, Descriptor };
