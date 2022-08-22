import { Model } from "sequelize/types";

interface DescriptorAttributes {
  DescriptorId: number;
  CategoryId: number;
  Name: string;
  //TODO Name in database is descriptorName in domain
}

class Descriptor {
  descriptorId: number;
  categoryId: number;
  descriptorName: string;

  constructor(
    descriptorId: number,
    categoryId: number,
    descriptorName: string
  ) {
    this.descriptorId = descriptorId;
    this.categoryId = categoryId;
    this.descriptorName = descriptorName;
  }

  public static modelToDomain = (
    descriptorModel: Model<DescriptorAttributes>
  ): Descriptor => {
    return new Descriptor(
      descriptorModel.DescriptorId,
      descriptorModel.CategoryId,
      descriptorModel.Name
    );
  };

  // Getters
  public getDescriptorId = (): number => {
    return this.descriptorId;
  };
  public getCategoryId = (): number => {
    return this.categoryId;
  };
  public getDescriptorName = (): string => {
    return this.descriptorName;
  };

  // Setters
  public setDescriptorId = (descriptorId: number) => {
    this.descriptorId = descriptorId;
  };
  public setCategoryId = (categoryId: number) => {
    this.categoryId = categoryId;
  };
  public setDescriptorName = (descriptorName: string) => {
    this.descriptorName = descriptorName;
  };
}

export default Descriptor;
