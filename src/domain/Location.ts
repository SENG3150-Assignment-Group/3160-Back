import { Model } from "sequelize/types";

interface LocationAttributes {
  LocationName: string;
  LocationId: number;
  AirportCode: string;
  Restricted: boolean;
  CountryCode3: string;
  RestricationStart: Date;
  RestricationEnd: Date;
}

class Location {
  locationId: number;
  locationName: string;
  airportCode: string;
  countryCode3: string;
  restricted: boolean;
  restrictionStart: Date;
  restrictionEnd: Date;

  constructor(
    locationId: number,
    locationName: string,
    airportCode: string,
    countryCode3: string,
    restricted: boolean,
    restrictionStart: Date,
    restrictionEnd: Date
  ) {
    this.locationId = locationId;
    this.locationName = locationName;
    this.airportCode = airportCode;
    this.countryCode3 = countryCode3;
    this.restricted = restricted;
    this.restrictionStart = restrictionStart;
    this.restrictionEnd = restrictionEnd;
  }

  // static
  // public static modelToDomain = (
  //   locationModel: Model<LocationAttributes>
  // ): Location => {
  //   return new Location(
  //     locationModel.LocationId,
  //     locationModel.LocationName,
  //     locationModel.AirportCode,
  //     locationModel.CountryCode3,
  //     locationModel.Restricted,
  //     locationModel.RestrictionStart,
  //     locationModel.RestrictionEnd
  //   );
  // };

  // Getters
  public getLocationId = (): number => {
    return this.locationId;
  };
  public getLocationName = (): string => {
    return this.locationName;
  };
  public getAirportCode = (): string => {
    return this.airportCode;
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
  public setAirportCode = (airportCode: string) => {
    this.airportCode = airportCode;
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
