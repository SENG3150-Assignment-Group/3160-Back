import FlightModel from "../models/FlightModel";
import flightsJSON from "./dummyData/flights2.json";

class FlightDAO {
  flights: FlightModel[] = [];

  constructor() {
    for (const flight of flightsJSON.flights) {
      this.flights.push(
        new FlightModel(
          flight.aircraft,
          flight.departure,
          flight.destination,
          flight.date,
          flight.takeoffTime,
          flight.landingTime,
          flight.price,
          flight.airline,
          flight.popularity,
          flight.class,
          flight.id,
          flight.numberOfSeats,
          flight.seatsBooked
        )
      );
    }
  }

  public readFlight = (flightID: string): FlightModel | null => {
    for (const flight of this.flights)
      if (flight.getFlightID() == flightID) return flight;
    return null;
  };

  public getFlightsByPopularity = (size: number): FlightModel[] => {
    const result: FlightModel[] = [];
    for (let pop = 1; pop < size + 1; pop++) {
      for (const flight of this.flights) {
        if (flight.popularity == pop) result.push(flight);
      }
    }
    return result;
  };

  public getFlights = (
    departure: string,
    destination: string,
    startDate: string,
    endDate: string,
    returnFlag: boolean,
    seats: number
  ): FlightModel[] => {
    const result: FlightModel[] = [];
    if (departure.length == 0) {
      for (const flight of this.flights) {
        if (
          flight.destination.toLowerCase() == destination &&
          flight.date == startDate &&
          flight.numberOfSeats - flight.seatsBooked >= seats
        ) {
          result.push(flight);
        }
      }
    } else if (destination.length == 0 && startDate.length == 0) {
      for (const flight of this.flights) {
        if (
          flight.departure.toLowerCase() == departure &&
          flight.numberOfSeats - flight.seatsBooked >= seats
        ) {
          result.push(flight);
        }
      }
    } else if (destination.length == 0) {
      for (const flight of this.flights) {
        if (
          flight.departure.toLowerCase() == departure &&
          flight.date == startDate &&
          flight.numberOfSeats - flight.seatsBooked >= seats
        ) {
          result.push(flight);
        }
      }
    } else if (startDate.length == 0) {
      for (const flight of this.flights) {
        if (
          flight.departure.toLowerCase() == departure &&
          flight.destination.toLowerCase() == destination &&
          flight.numberOfSeats - flight.seatsBooked >= seats
        ) {
          result.push(flight);
        }
      }
    } else {
      for (const flight of this.flights) {
        if (
          flight.departure.toLowerCase() == departure &&
          flight.destination.toLowerCase() == destination &&
          flight.date == startDate &&
          flight.numberOfSeats - flight.seatsBooked >= seats
        ) {
          result.push(flight);
        }
      }
    }

    return result;
  };
}

export default FlightDAO;
