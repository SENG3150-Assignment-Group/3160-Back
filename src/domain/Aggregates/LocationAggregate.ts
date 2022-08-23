import Descriptor from "../Descriptor";
import Location from "../Location";

class LocationAggregate {
  locationId: number;
  locationName: string;
  airport: string;
  countryCode3: string;
  restricted: boolean;
  restrictionStart: Date;
  restrictionEnd: Date;
  descriptors: Descriptor[];

  constructor(location: Location, descriptors: Descriptor[]) {
    this.locationId = location.getLocationId();
    this.locationName = location.getLocationName();
    this.airport = location.getAirport();
    this.countryCode3 = location.getCountryCode3();
    this.restricted = location.isRestricted();
    this.restrictionStart = location.getRestrictionStart();
    this.restrictionEnd = location.getRestrictionEnd();
    this.descriptors = descriptors;
  }

  // Getters
  public getLocationId = (): number => {
    return this.locationId;
  };
  public getLocationName = (): string => {
    return this.locationName;
  };
  public getAirport = (): string => {
    return this.airport;
  };
  public getCountryCode3 = (): string => {
    return this.countryCode3;
  };
  public isRestricted = (): boolean => {
    return this.restricted;
  };
  public getRestrictionStart = (): Date => {
    return this.restrictionStart;
  };
  public getRestrictionEnd = (): Date => {
    return this.restrictionEnd;
  };
  public getDescriptors = (): Descriptor[] => {
    return this.descriptors;
  };

  // Setters
  public setLocationId = (locationId: number) => {
    this.locationId = locationId;
  };
  public setLocationName = (locationName: string) => {
    this.locationName = locationName;
  };
  public setAirport = (airport: string) => {
    this.airport = airport;
  };
  public setCountryCode3 = (countryCode3: string) => {
    this.countryCode3 = countryCode3;
  };
  public setRestricted = (restricted: boolean) => {
    this.restricted = restricted;
  };
  public setRestrictionStart = (restrictionStart: Date) => {
    this.restrictionStart = restrictionStart;
  };
  public setRestrictionEnd = (restrictionEnd: Date) => {
    this.restrictionEnd = restrictionEnd;
  };
  public setDescriptor = (descriptor: Descriptor) => {
    this.descriptors.push(descriptor);
  };
}

export default LocationAggregate;
