class Flight {
  private flightId: number;
  private flightCode: string;
  private departureId: number;
  private departureCode: string;
  private departureDateTime: Date;
  private destinationCode: string;
  private destinationId: number;
  private destinationDateTime: Date;
  private stopOverCode: string;
  private stopOverId: number;
  private airlineCode: string;
  private planeCode: string;
  private duration: number;
  private numSeats: number;

  constructor(
    flightId: number,
    flightCode: string,
    departureCode: string,
    departureId: number,
    departureDateTime: Date,
    destinationCode: string,
    destinationId: number,
    destinationDateTime: Date,
    stopOverCode: string,
    stopOverId: number,
    airlineCode: string,
    planeCode: string,
    duration: number,
    numSeats: number
  ) {
    this.flightId = flightId;
    this.flightCode = flightCode;
    this.departureCode = departureCode;
    this.departureId = departureId;
    this.departureDateTime = departureDateTime;
    this.destinationCode = destinationCode;
    this.destinationId = destinationId;
    this.destinationDateTime = destinationDateTime;
    this.stopOverCode = stopOverCode;
    this.stopOverId = stopOverId;
    this.airlineCode = airlineCode;
    this.planeCode = planeCode;
    this.duration = duration;
    this.numSeats = numSeats;
  }

  // Getters
  public getFlightId = (): number => {
    return this.flightId;
  };
  public getFlightCode = (): string => {
    return this.flightCode;
  };
  public getDepartureCode = (): string => {
    return this.departureCode;
  };
  public getDepartureId = (): number => {
    return this.departureId;
  };
  public getDepartureDateTime = (): Date => {
    return this.departureDateTime;
  };
  public getDestinationCode = (): string => {
    return this.destinationCode;
  };
  public getDestinationId = (): number => {
    return this.destinationId;
  };
  public getDestinationDateTime = (): Date => {
    return this.destinationDateTime;
  };
  public getStopOverCode = (): string => {
    return this.stopOverCode;
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
  public getDuration = (): number => {
    return this.duration;
  };
  public getNumSeats = (): number => {
    return this.numSeats;
  };

  // Setters
  public setFlightId = (flightId: number) => {
    this.flightId = flightId;
  };
  public setFlightCode = (flightCode: string) => {
    this.flightCode = flightCode;
  };
  public setDepartureCode = (departureCode: string) => {
    this.departureCode = departureCode;
  };
  public setDepartureId = (departureId: number) => {
    this.departureId = departureId;
  };
  public setDepartureDateTime = (departureDateTime: Date) => {
    this.departureDateTime = departureDateTime;
  };
  public setDestinationCode = (destinationCode: string) => {
    this.destinationCode = destinationCode;
  };
  public setDestinationId = (destinationId: number) => {
    this.destinationId = destinationId;
  };
  public setDestinationDateTime = (destinationDateTime: Date) => {
    this.destinationDateTime = destinationDateTime;
  };
  public setStopOverCode = (stopOverCode: string) => {
    this.stopOverCode = stopOverCode;
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
  public setDuration = (duration: number) => {
    this.duration = duration;
  };
  public setNumSeats = (numSeats: number) => {
    this.numSeats = numSeats;
  };
}

export default Flight;
