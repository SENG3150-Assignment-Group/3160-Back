import { PackageOutput } from "../database/models/Package";

class Package {
  packageId: number;
  locationCode: string;
  flightId: number;
  accountId: number;
  accomodation: string;
  accomodationCost: number;

  constructor(
    packageId: number,
    locationCode: string,
    flightId: number,
    accountId: number,
    accomodation: string,
    accomodationCost: number
  ) {
    this.packageId = packageId;
    this.locationCode = locationCode;
    this.flightId = flightId;
    this.accountId = accountId;
    this.accomodation = accomodation;
    this.accomodationCost = accomodationCost;
  }

  public static modelToDomain = (model: PackageOutput) => {
    return new Package(
      model.PackageId,
      model.LocationCode,
      model.FlightId,
      model.AccountId,
      model.Accomodation,
      model.AccomodationCost
    );
  };

  // Getters
  public getPackageId = (): number => {
    return this.packageId;
  };
  public getLocationCode = (): string => {
    return this.locationCode;
  };
  public getFlightId = (): number => {
    return this.flightId;
  };
  public getAccountId = (): number => {
    return this.accountId;
  };
  public getAccomodation = (): string => {
    return this.accomodation;
  };
  public getAccomodationCost = (): number => {
    return this.accomodationCost;
  };

  // Setters
  public setPackageId = (packageId: number) => {
    this.packageId = packageId;
  };
  public setLocationCode = (locationCode: string) => {
    this.locationCode = locationCode;
  };
  public setFlightCode = (flightId: number) => {
    this.flightId = flightId;
  };
  public setAccountId = (accountId: number) => {
    this.accountId = accountId;
  };
  public setAccomodation = (accomodation: string) => {
    this.accomodation = accomodation;
  };
  public setAccomodationCost = (accomodationCost: number) => {
    this.accomodationCost = accomodationCost;
  };
}

export default Package;
