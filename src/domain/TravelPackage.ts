class TravelPackage {
  packageId: number;
  locationCode: string;
  flightCodes: Array<number>;
  accountId: number;
  accomodation: string;
  accomodationCost: number;

  constructor(
    packageId: number,
    locationCode: string,
    flightCodes: Array<number>,
    accountId: number,
    accomodation: string,
    accomodationCost: number
  ) {
    this.packageId = packageId;
    this.locationCode = locationCode;
    this.flightCodes = flightCodes;
    this.accountId = accountId;
    this.accomodation = accomodation;
    this.accomodationCost = accomodationCost;
  }

  // Getters
  public getPackageId = (): number => {
    return this.packageId;
  };
  public getLocationCode = (): string => {
    return this.locationCode;
  };
  public getFlightCodes = (): Array<number> => {
    return this.flightCodes;
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
  public setFlightCodes = (flightCodes: Array<number>) => {
    this.flightCodes = flightCodes;
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

export default TravelPackage;
