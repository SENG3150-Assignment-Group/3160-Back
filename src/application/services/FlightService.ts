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
  ) => Promise<Flight[]>;
}

export default FlightService;
