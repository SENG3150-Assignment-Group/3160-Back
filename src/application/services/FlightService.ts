import Flight from "../../domain/Flight";

interface FlightService {
  getFlight: (flightID: string) => Flight | null;
  searchFlights: (
    departure: number,
    destination: number,
    startDate: Date,
    endDate: Date,
    returnFlag: boolean,
    seats: number
  ) => Flight[];
}

export default FlightService;
