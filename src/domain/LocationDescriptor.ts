class LocationDescriptor {
  descriptorId: number;
  locationId: number;

  constructor(descriptorId: number, locationId: number) {
    this.descriptorId = descriptorId;
    this.locationId = locationId;
  }

  // Getters
  public getDescriptorId = (): number => {
    return this.descriptorId;
  };
  public getLocationId = (): number => {
    return this.locationId;
  };

  // Setters
  public setDescriptorId = (descriptorId: number) => {
    this.descriptorId = descriptorId;
  };
  public setLocationId = (locationId: number) => {
    this.locationId = locationId;
  };
}

export default LocationDescriptor;
