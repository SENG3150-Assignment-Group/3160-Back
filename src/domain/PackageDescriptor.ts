class PackageDescriptor {
  descriptorId: number;
  packageId: number;

  constructor(descriptorId: number, packageId: number) {
    this.descriptorId = descriptorId;
    this.packageId = packageId;
  }

  // Getters
  public getDescriptorId = (): number => {
    return this.descriptorId;
  };
  public getPackageId = (): number => {
    return this.packageId;
  };

  // Setters
  public setDescriptorId = (descriptorId: number) => {
    this.descriptorId = descriptorId;
  };
  public setPackageId = (packageId: number) => {
    this.packageId = packageId;
  };
}

export default PackageDescriptor;
