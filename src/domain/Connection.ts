import Flight from "./Flight";

class Connection {
  private duration: number;
  private flights: Flight[];

  constructor(duration: number) {
    this.duration = duration;
    this.flights = new Array<Flight>();
  }

  public addFlight = (flight: Flight): void => {
    this.flights.push(flight);
  };

  /*
   * Return a flight that has not been visited yet
   */
  public getFlight = (visited: number[]): Flight | null => {
    const flight = this.flights.find(
      (flight) => !visited.includes(flight.getFlightId())
    );
    return flight === undefined ? null : flight;
  };

  public getDuration = (): number => {
    return this.duration;
  };
}

export default Connection;
