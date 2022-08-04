class FlightModel {
  aircraft: string;
  departure: string;
  destination: string;
  date: string;
  takeoffTime: string;
  landingTime: string;
  price: number;
  airline: string;
  popularity: number;
  seatClass: string;
  flightID: string;
  numberOfSeats: number;
  seatsBooked: number;

  constructor(
    aircraft: string,
    departure: string,
    destination: string,
    date: string,
    takeoffTime: string,
    landingTime: string,
    price: number,
    airline: string,
    popularity: number,
    seatClass: string, //class
    flightID: string,
    numberOfSeats: number,
    seatsBooked: number
  ) {
    this.aircraft = aircraft;
    this.departure = departure;
    this.destination = destination;
    this.date = date;
    this.takeoffTime = takeoffTime;
    this.landingTime = landingTime;
    this.price = price;
    this.airline = airline;
    this.popularity = popularity;
    this.seatClass = seatClass;
    this.flightID = flightID;
    this.numberOfSeats = numberOfSeats;
    this.seatsBooked = seatsBooked;
  }

  /*
   * Static factory method
   */
  public static createFlightModel = (
    aircraft: string,
    departure: string,
    destination: string,
    date: string,
    takeoffTime: string,
    landingTime: string,
    price: number,
    airline: string,
    popularity: number,
    seatClass: string, //class
    flightID: string,
    numberOfSeats: number,
    seatsBooked: number
  ): FlightModel => {
    return new FlightModel(
      aircraft,
      departure,
      destination,
      date,
      takeoffTime,
      landingTime,
      price,
      airline,
      popularity,
      seatClass,
      flightID,
      numberOfSeats,
      seatsBooked
    );
  };

  /*
   * Getters
   */
  public getAircraft = (): string => {
    return this.aircraft;
  };

  public getDeparture = (): string => {
    return this.departure;
  };

  public getDestination = (): string => {
    return this.destination;
  };

  public getDate = (): string => {
    return this.date;
  };

  public getTakeoffTime = (): string => {
    return this.takeoffTime;
  };

  public getLandingTime = (): string => {
    return this.landingTime;
  };

  public getPrice = (): number => {
    return this.price;
  };

  public getAirline = (): string => {
    return this.airline;
  };

  public getPopularity = (): number => {
    return this.popularity;
  };

  public getFlightID = (): string => {
    return this.flightID;
  };

  public getSeatClass = (): string => {
    return this.seatClass;
  };

  public getNumberOfSeats = (): number => {
    return this.numberOfSeats;
  };

  public getSeatsBooked = (): number => {
    return this.seatsBooked;
  };

  /*
   * Setters
   */
  public setAircraft = (aircraft: string) => {
    this.aircraft = aircraft;
  };

  public setDeparture = (departure: string) => {
    this.departure = departure;
  };

  public setDestination = (destination: string) => {
    this.destination = destination;
  };

  public setDate = (date: string) => {
    this.date = date;
  };

  public setTakeoffTime = (takeoffTime: string) => {
    this.takeoffTime = takeoffTime;
  };

  public setLandingTime = (landingTime: string) => {
    this.landingTime = landingTime;
  };

  public setPrice = (price: number) => {
    this.price = price;
  };

  public setAirline = (airline: string) => {
    this.airline = airline;
  };

  public setPopularity = (popularity: number) => {
    this.popularity = popularity;
  };

  public setFlightID = (flightID: string) => {
    this.flightID = flightID;
  };

  public setSeatClass = (seatClass: string) => {
    this.seatClass = seatClass;
  };

  public setNumberOfSeats = (numberOfSeats: number) => {
    this.numberOfSeats = numberOfSeats;
  };

  public setSeatsBooked = (seatsBooked: number) => {
    this.seatsBooked = seatsBooked;
  };
}

export default FlightModel;
