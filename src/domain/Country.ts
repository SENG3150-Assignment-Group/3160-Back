class Country {
  countryCode3: string;
  countryCode2: string;
  countryName: string;
  alternativeName: string;

  constructor(
    countryCode3: string,
    countryCode2: string,
    countryName: string,
    alternativeName: string
  ) {
    this.countryCode3 = countryCode3;
    this.countryCode2 = countryCode2;
    this.countryName = countryName;
    this.alternativeName = alternativeName;
  }

  public getCountryCode3 = (): string => {
    return this.countryCode3;
  };
  public getCountryCode2 = (): string => {
    return this.countryCode2;
  };
  public getCountryName = (): string => {
    return this.countryName;
  };
  public getAlternativeName = (): string => {
    return this.alternativeName;
  };

  public setCountryCode3 = (countryCode3: string) => {
    this.countryCode3 = countryCode3;
  };
  public setCountryCode2 = (countryCode2: string) => {
    this.countryCode2 = countryCode2;
  };
  public setCountryName = (countryName: string) => {
    this.countryName = countryName;
  };
  public setAlternativeName = (alternativeName: string) => {
    this.alternativeName = alternativeName;
  };
}

export default Country;
