import FlightAggregate from "domain/Aggregates/FlightAggregate";
import Flight from "../../domain/Flight";

interface FlightService {
  getFlight: (flightID: string) => Promise<FlightAggregate | null>;
  searchFlights: (
    departure: number,
    destination: number,
    startDate: Date,
    endDate: Date,
    returnFlag: boolean,
    seats: number
  ) => Promise<Flight[][]>;
  createFlight: (
    flightCode: string,
    departureId: number,
    departureDateTime: Date,
    destinationId: number,
    destinationDateTime: Date,
    airlineCode: string,
    planeCode: string,
    duration: string
  ) => Promise<Flight | null>;
}

export default FlightService;
