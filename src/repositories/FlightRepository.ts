import FlightDAO from "DAO/FlightDAO";
import FlightAggregate from "domain/Aggregates/FlightAggregate";

class FlightRepository {
  constructor() {}

  public getFlight = async (id: string): Promise<FlightAggregate | null> => {
    // convert id to number if it isnt already
    const flightId = Number(id);
    // instanttiate DAO and fetch flight by id
    const flightDAO = new FlightDAO();
    const flightObj = await flightDAO.readFlight(flightId);

    // make other calls to fill out flight aggregate
    // locationNames
    // planeCode

    return;
  };
}
