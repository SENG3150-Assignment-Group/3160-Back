import FlightAggregate from "../../domain/Aggregates/FlightAggregate";
import FlightRepository from "../../repositories/FlightRepository";
import Flight from "../../domain/Flight";
import FlightService from "./FlightService";
import LocationServiceImpl from "./LocationServiceImpl";
import LocationService from "./LocationService";
import FlightSearchAlgorithm from "../../domain/services/FlightSearchAlgorithm";
import Distance from "../../domain/Distance";
import FlightDAO from "../../DAO/FlightDAO";
import { Op } from "sequelize";

class FlightServiceImpl implements FlightService {
  public getFlight = async (id: string): Promise<FlightAggregate | null> => {
    console.log(typeof id);
    const flightID = Number(id);

    const flightRepository = new FlightRepository();

    const flight = await flightRepository.getFlight(flightID);

    return flight;
  };

  public searchFlights = async (
    departure: number,
    destination: number,
    startDate: Date,
    endDate: Date,
    returnFlag: boolean,
    seats: number
  ): Promise<Flight[][]> => {
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

    const zeroIndexFlights = (flights: Flight[]) => {
      for (const flight of flights) {
        flight.setFlightId(flight.getFlightId() - 1);
      }
    };

    const oneIndexPaths = (paths: number[][]) => {
      for (const path of paths) {
        for (let i = 0; i < path.length; i++) {
          path[i] = path[i] + 1;
        }
      }
    };

    const convertLegsToQuery = (legs: number[][]): any[] => {
      const query = new Array<any>();

      for (const leg of legs) {
        query.push({
          [Op.and]: [{ DepartureId: leg[0] }, { DestinationId: leg[1] }],
        });
      }
      return query;
    };

    const oneIndexJourneys = (journeys: Flight[][]) => {
      const visited = new Array<Flight>();
      let id: number;
      for (const journey of journeys) {
        for (const flight of journey) {
          if (!visited.find((v) => v === flight)) {
            flight.setDepartureId(flight.getDepartureId() + 1);
            flight.setDestinationId(flight.getDestinationId() + 1);
            visited.push(flight);
          }
        }
      }
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

    // convert paths to 1 indexing for querying DB
    oneIndexPaths(paths);

    // turn paths into legs
    const legs = algorithm.convertPathsToLegs(paths);

    // convert legs into a query object
    const queryObj = convertLegsToQuery(legs);

    // determine upperbound for date range within which all flights can occur
    const upperbound = new Date();
    upperbound.setTime(startDate.getTime() + flightWindow * 60 * 60 * 1000);

    console.log(`lowerbound: ${startDate.toUTCString()}`);
    console.log(`upperbound: ${upperbound.toUTCString()}`);

    // query flights
    const flightDAO = new FlightDAO();
    const flightModels = await flightDAO.search(
      queryObj,
      startDate,
      upperbound
    );

    // convert to flight domain classes using zero indexing
    const flights = flightModels.map((model) => {
      model.DepartureId -= 1;
      model.DestinationId -= 1;
      return Flight.modelToDomain(model);
    });

    // fill flight matrix
    algorithm.fillFlightsMatrix(flights);

    console.log(algorithm.getMatrix().getConnection(4, 28));

    // collect journeys
    const journeys = algorithm.findJourneys();
    oneIndexJourneys(journeys);

    return journeys;
  };

  public createFlight = async (
    flightCode: string,
    departureId: number,
    departureDateTime: Date,
    destinationId: number,
    destinationDateTime: Date,
    airlineCode: string,
    planeCode: string,
    duration: string
  ): Promise<Flight | null> => {
    const flightDAO = new FlightDAO();

    const flightModel = await flightDAO.create(
      flightCode,
      departureId,
      departureDateTime,
      destinationId,
      destinationDateTime,
      airlineCode,
      planeCode,
      duration
    );

    if (flightModel == null) return null;

    const flight = Flight.modelToDomain(flightModel);

    return flight;
  };
}

export default FlightServiceImpl;
