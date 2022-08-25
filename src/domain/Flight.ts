import { FlightOutput } from "../database/models/Flight";

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
  private duration: string;

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
    duration: string
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

  public static modelToDomain = (model: FlightOutput): Flight => {
    return new Flight(
      model.FlightId,
      model.FlightCode,
      model.DepartureId,
      model.DepartureDateTime,
      model.DestinationId,
      model.DestinationDateTime,
      model.StopOverId,
      model.AirlineCode,
      model.PlaneCode,
      model.Duration
    );
  };

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
  public getDuration = (): string => {
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
  public setDuration = (duration: string) => {
    this.duration = duration;
  };
}

export default Flight;
