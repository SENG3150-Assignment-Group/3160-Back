import Flight from "../../domain/Flight";

class FlightRepository {
  //flightDAO: FlightDAO;

  constructor() {
    //this.flightDAO = new FlightDAO();
  }

  /*
   * Mapper Functions
   */
  // private modelToDomain = (flightModel: FlightModel): Flight => {
  //   return new Flight(
  //     flightModel.getFlightCode();
  //     flightModel.getDepartureDate();
  //     flightModel.getDepartureTime();
  //     flightModel.getDepartureCode();
  //     flightModel.getDestinationCode();
  //     flightModel.getAirlineCode();
  //     flightModel.getPlaneCode();
  //     flightModel.getDuration();
  //     flightModel.getNumberOfSeats();
  //   );
  // };

  // private domainToModel = (flight: Flight): FlightModel => {
  //   return new FlightModel(
  //     flight.getFlightCode();
  //     flight.getDepartureDate();
  //     flight.getDepartureTime();
  //     flight.getDepartureCode();
  //     flight.getDestinationCode();
  //     flight.getAirlineCode();
  //     flight.getPlaneCode();
  //     flight.getDuration();
  //     flight.getNumberOfSeats();
  //   );
  // };

  /*
   * CRUD operations
   */
  // public getFlight = (flightID: string): Flight | null => {
  //   const flight: FlightModel | null = null;

  //   if (flight == null) return null;

  //   return this.modelToDomain(flight);
  // };

  // public getFlights = (
  //   departure: number,
  //   destination: number,
  //   date: Date,
  //   seats: number
  // ): Flight[] => {
  //   const flights: FlightModel[] = [];

  //   return flights.map((flight) => this.modelToDomain(flight));
  // };
}

export default FlightRepository;
