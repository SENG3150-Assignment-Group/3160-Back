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
  public getFlight = (visited: Map<number, boolean>): Flight | null => {
    const flight = this.flights.find(
      (flight) => visited.get(flight.getFlightId()) == undefined
    );
    if (flight === undefined) return null;

    return new Flight(
      flight.getFlightId(),
      flight.getFlightCode(),
      flight.getDepartureId(),
      flight.getDepartureDateTime(),
      flight.getDestinationId(),
      flight.getDestinationDateTime(),
      flight.getStopOverId(),
      flight.getAirlineCode(),
      flight.getPlaneCode(),
      flight.getDuration()
    );
  };

  public getDuration = (): number => {
    return this.duration;
  };

  public getFlights = (): Flight[] => {
    return this.flights;
  };
}

export default Connection;
