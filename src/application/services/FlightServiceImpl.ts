import FlightAggregate from "domain/Aggregates/FlightAggregate";
import FlightRepository from "../../repositories/FlightRepository";
import Flight from "../../domain/Flight";
import FlightService from "./FlightService";

class FlightServiceImpl implements FlightService {
  getFlight = async (id: string): Promise<FlightAggregate | null> => {
    console.log(typeof id);
    const flightID = Number(id);

    const flightRepository = new FlightRepository();

    const flight = await flightRepository.getFlight(flightID);

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
