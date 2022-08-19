class PlaneType {
  planeCode: string;
  type: string;
  numFirstClass: number;
  numBusiness: number;
  numPremiumEconomy: number;
  numEconomy: number;

  constructor(
    planeCode: string,
    type: string,
    numFirstClass: number,
    numBusiness: number,
    numPremiumEconomy: number,
    numEconomy: number
  ) {
    this.planeCode = planeCode;
    this.type = type;
    this.numFirstClass = numFirstClass;
    this.numBusiness = numBusiness;
    this.numPremiumEconomy = numPremiumEconomy;
    this.numEconomy = numEconomy;
  }

  // Getters
  public getPlaneCode = (): string => {
    return this.planeCode;
  };
  public getPlaneType = (): string => {
    return this.type;
  };
  public getNumFirstClass = (): number => {
    return this.numFirstClass;
  };
  public getNumBusiness = (): number => {
    return this.numBusiness;
  };
  public getNumPremiumEconomy = (): number => {
    return this.numPremiumEconomy;
  };
  public getNumEconomy = (): number => {
    return this.numEconomy;
  };

  // Setters
  public setPlaneCode = (planeCode: string) => {
    this.planeCode = planeCode;
  };
  public setType = (type: string) => {
    this.type = type;
  };
  public setNumFirstClass = (numFirstClass: number) => {
    this.numFirstClass = numFirstClass;
  };
  public setNumBusiness = (numBusiness: number) => {
    this.numBusiness = numBusiness;
  };
  public setNumPremiumEconomy = (numPremiumEconomy: number) => {
    this.numPremiumEconomy = numPremiumEconomy;
  };
  public setNumEconomy = (numEconomy: number) => {
    this.numEconomy = numEconomy;
  };
}

export default PlaneType;
