import { LocationOutput } from "../database/models/Location";

class Location {
  locationName: string;
  locationCode: string;
  locationId: number;
  airport: string;
  restricted: boolean;
  countryCode3: string;
  restrictionStart: Date;
  restrictionEnd: Date;

  constructor(
    locationName: string,
    locationCode: string,
    locationId: number,
    airport: string,
    restricted: boolean,
    countryCode3: string,
    restrictionStart: Date,
    restrictionEnd: Date
  ) {
    this.locationId = locationId;
    this.locationName = locationName;
    this.locationCode = locationCode;
    this.airport = airport;
    this.countryCode3 = countryCode3;
    this.restricted = restricted;
    this.restrictionStart = restrictionStart;
    this.restrictionEnd = restrictionEnd;
  }

  public static modelToDomain = (model: LocationOutput): Location => {
    return new Location(
      model.LocationName,
      model.LocationCode,
      model.LocationId,
      model.Airport,
      model.Restricted,
      model.CountryCode3,
      model.RestrictionStart,
      model.RestrictionEnd
    );
  };

  // Getters
  public getLocationId = (): number => {
    return this.locationId;
  };
  public getLocationName = (): string => {
    return this.locationName;
  };
  public getLocationCode = (): string => {
    return this.locationCode;
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

  // Setters
  public setLocationId = (locationId: number) => {
    this.locationId = locationId;
  };
  public setLocationName = (locationName: string) => {
    this.locationName = locationName;
  };
  public setLocationCode = (locationCode: string) => {
    this.locationCode = locationCode;
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
}

export default Location;
