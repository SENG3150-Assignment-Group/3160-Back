import Flight from "../../domain/Flight";
import FlightRepository from "../../infrastructure/repositories/FlightRepository";
import FlightService from "./FlightService";

class FlightServiceImpl implements FlightService {
  getFlight = (flightID: string): Flight | null => {
    const flightRepository = new FlightRepository();
    const flight = null; /*flightRepository.getFlight(flightID)*/

    return flight;
  };

  searchFlights = (
    departure: number,
    destination: number,
    startDate: Date,
    endDate: Date,
    returnFlag: boolean,
    seats: number
  ): Flight[] => {
    console.log(
      `${departure} ${destination} ${startDate} ${endDate} ${returnFlag} ${seats}`
    );
    const flights: Flight[] = new Array<Flight>();

    // todo

    return flights;
  };
}

export default FlightServiceImpl;
