import FlightAggregate from "../../domain/Aggregates/FlightAggregate";
import FlightRepository from "../../repositories/FlightRepository";
import Flight from "../../domain/Flight";
import FlightService from "./FlightService";
import LocationServiceImpl from "./LocationServiceImpl";
import LocationService from "./LocationService";
import FlightSearchAlgorithm from "../../domain/services/FlightSearchAlgorithm";
import Distance from "../../domain/Distance";

class FlightServiceImpl implements FlightService {
  getFlight = async (id: string): Promise<FlightAggregate | null> => {
    console.log(typeof id);
    const flightID = Number(id);

    const flightRepository = new FlightRepository();

    const flight = await flightRepository.getFlight(flightID);

    return flight;
  };

  searchFlights = async (
    departure: number,
    destination: number,
    startDate: Date,
    endDate: Date,
    returnFlag: boolean,
    seats: number
  ): Promise<Flight[]> => {
    console.log(
      `${departure} ${destination} ${startDate} ${endDate} ${returnFlag} ${seats}`
    );

    const zeroIndexDistances = (distances: Distance[]) => {
      for (const distance of distances) {
        distance.setLocationId1(distance.getLocationId1() - 1);
        distance.setLocationId2(distance.getLocationId2() - 1);
      }
    };

    const zeroIndexLocation = (location: number) => {
      return location - 1;
    };

    // get distances
    const locationService: LocationService = new LocationServiceImpl();
    const distances = await locationService.getDistances();
    const nLocations = await locationService.getLocationCount();

    // convert distances to zero indexing
    zeroIndexDistances(distances);

    // intitialize flight algo and matrix
    const algorithm = new FlightSearchAlgorithm(nLocations, distances);

    // convert dep and dest locations to zero indexing
    departure = zeroIndexLocation(departure);
    destination = zeroIndexLocation(destination);
    console.log(`(${departure}, ${destination})`);

    // gather flight paths
    const paths = algorithm.findPaths(departure, destination, 1);
    console.log(paths);

    // calculate date range for flight query
    const flightWindow = algorithm.getFlightWindow(3);
    console.log(flightWindow);
    // query flights

    // fill flight matrix

    // collect path Instances

    return new Array<Flight>();
  };
}

export default FlightServiceImpl;
