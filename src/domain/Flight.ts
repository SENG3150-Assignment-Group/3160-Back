class Flight {
  private flightId: number;
  private flightCode: string;
  private departureId: number;
  private departureDateTime: Date;
  private destinationId: number;
  private destinationDateTime: Date;
  private stopOverId: number;
  private airlineCode: string;
  private planeCode: string;
  private duration: Date;

  constructor(
    flightId: number,
    flightCode: string,
    departureId: number,
    departureDateTime: Date,
    destinationId: number,
    destinationDateTime: Date,
    stopOverId: number,
    airlineCode: string,
    planeCode: string,
    duration: Date
  ) {
    this.flightId = flightId;
    this.flightCode = flightCode;
    this.departureId = departureId;
    this.departureDateTime = departureDateTime;
    this.destinationId = destinationId;
    this.destinationDateTime = destinationDateTime;
    this.stopOverId = stopOverId;
    this.airlineCode = airlineCode;
    this.planeCode = planeCode;
    this.duration = duration;
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
}

export default Flight;
