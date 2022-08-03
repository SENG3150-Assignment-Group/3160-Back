class Flight {
  private flightCode: number;
  private departureDate: Date;
  private departureTime: string;
  private departureCode: number;
  private destinationCode: number;
  private airlineCode: number;
  private planeCode: number;
  private duration: number;
  private numberOfSeats: number;

  constructor(
    flightCode: number,
    departureDate: Date,
    departureTime: string,
    departureCode: number,
    destinationCode: number,
    airlineCode: number,
    planeCode: number,
    duration: number,
    numberOfSeats: number
  ) {
    this.flightCode = flightCode;
    this.departureDate = departureDate;
    this.departureTime = departureTime;
    this.departureCode = departureCode;
    this.destinationCode = destinationCode;
    this.airlineCode = airlineCode;
    this.planeCode = planeCode;
    this.duration = duration;
    this.numberOfSeats = numberOfSeats;
  }

  /*
   * Static factory method
   */
  public static createFlight = (
    flightCode: number,
    departureDate: Date,
    departureTime: string,
    departureCode: number,
    destinationCode: number,
    airlineCode: number,
    planeCode: number,
    duration: number,
    numberOfSeats: number
  ) => {
    return new Flight(
      flightCode,
      departureDate,
      departureTime,
      departureCode,
      destinationCode,
      airlineCode,
      planeCode,
      duration,
      numberOfSeats
    );
  };

  /*
   * Getters
   */
  public getFlightCode = (): number => {
    return this.flightCode;
  };

  public getDepartureDate = (): Date => {
    return this.departureDate;
  };

  public getDepartureTime = (): string => {
    return this.departureTime;
  };

  public getDepartureCode = (): number => {
    return this.departureCode;
  };

  public getDestinationCode = (): number => {
    return this.destinationCode;
  };

  public getAirlineCode = (): number => {
    return this.airlineCode;
  };

  public getPlaneCode = (): number => {
    return this.planeCode;
  };

  public getDuration = (): number => {
    return this.duration;
  };

  public getNumberOfSeats = (): number => {
    return this.numberOfSeats;
  };

  /*
   * Setters
   */
  public setFlightCode = (flightCode: number): void => {
    this.flightCode = flightCode;
  };

  public setDepartureDate = (departureDate: Date): void => {
    this.departureDate = departureDate;
  };

  public setDepartureTime = (departureTime: string): void => {
    this.departureTime = departureTime;
  };

  public setDepartureCode = (departureCode: number): void => {
    this.departureCode = departureCode;
  };

  public setDestinationCode = (destinationCode: number): void => {
    this.destinationCode = destinationCode;
  };

  public setAirlineCode = (airlineCode: number): void => {
    this.airlineCode = airlineCode;
  };

  public setPlaneCode = (planeCode: number): void => {
    this.planeCode = planeCode;
  };

  public setDuration = (duration: number): void => {
    this.duration = duration;
  };

  public setNumberOfSeats = (numberOfSeats: number) => {
    this.numberOfSeats = numberOfSeats;
  };
}

export default Flight;
