class FlightAggregate {
  private flightId: number;
  private flightCode: string;
  private departureId: number;
  private departureName: string;
  private departureCode: string;
  private departureDateTime: Date;
  private destinationId: number;
  private destinationName: string;
  private destinationCode: string;
  private destinationDateTime: Date;
  private stopOverId: number;
  private stopOverName: string;
  private airlineCode: string;
  private planeCode: string;
  private duration: Date;
  private numFirstClass: number;
  private numBusiness: number;
  private numPremiumEconomy: number;
  private numEconomy: number;

  constructor(
    flightId: number,
    flightCode: string,
    departureId: number,
    departureName: string,
    departureCode: string,
    departureDateTime: Date,
    destinationId: number,
    destinationName: string,
    destinationCode: string,
    destinationDateTime: Date,
    stopOverId: number,
    stopOverName: string,
    airlineCode: string,
    planeCode: string,
    duration: Date,
    numFirstClass: number,
    numBusiness: number,
    numPremiumEconomy: number,
    numEconomy: number
  ) {
    this.flightId = flightId;
    this.flightCode = flightCode;
    this.departureId = departureId;
    this.departureName = departureName;
    this.departureCode = departureCode;
    this.departureDateTime = departureDateTime;
    this.destinationId = destinationId;
    this.destinationName = destinationName;
    this.destinationCode = destinationCode;
    this.destinationDateTime = destinationDateTime;
    this.stopOverId = stopOverId;
    this.stopOverName = stopOverName;
    this.airlineCode = airlineCode;
    this.planeCode = planeCode;
    this.duration = duration;
    this.numFirstClass = numFirstClass;
    this.numBusiness = numBusiness;
    this.numPremiumEconomy = numPremiumEconomy;
    this.numEconomy = numEconomy;
  }

  // Getters
  public getFlightId = (): number => {
    return this.flightId;
  };
  public getFlightCode = (): string => {
    return this.flightCode;
  };
  public getDepartureId = (): number => {
    return this.departureId;
  };
  public getDepartureDateTime = (): Date => {
    return this.departureDateTime;
  };
  public getDestinationId = (): number => {
    return this.destinationId;
  };
  public getDestinationDateTime = (): Date => {
    return this.destinationDateTime;
  };
  public getStopOverId = (): number => {
    return this.stopOverId;
  };
  public getAirlineCode = (): string => {
    return this.airlineCode;
  };
  public getPlaneCode = (): string => {
    return this.planeCode;
  };
  public getDuration = (): Date => {
    return this.duration;
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
  public setFlightId = (flightId: number) => {
    this.flightId = flightId;
  };
  public setFlightCode = (flightCode: string) => {
    this.flightCode = flightCode;
  };
  public setDepartureId = (departureId: number) => {
    this.departureId = departureId;
  };
  public setDepartureDateTime = (departureDateTime: Date) => {
    this.departureDateTime = departureDateTime;
  };
  public setDestinationId = (destinationId: number) => {
    this.destinationId = destinationId;
  };
  public setDestinationDateTime = (destinationDateTime: Date) => {
    this.destinationDateTime = destinationDateTime;
  };
  public setStopOverId = (stopOverId: number) => {
    this.stopOverId = stopOverId;
  };
  public setAirlineCode = (airlineCode: string) => {
    this.airlineCode = airlineCode;
  };
  public setPlaneCode = (planeCode: string) => {
    this.planeCode = planeCode;
  };
  public setDuration = (duration: Date) => {
    this.duration = duration;
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

export default FlightAggregate;
