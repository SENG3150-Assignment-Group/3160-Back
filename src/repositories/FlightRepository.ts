import sequelize from "../database/";
import FlightDAO from "../DAO/FlightDAO";
import LocationDAO from "../DAO/LocationDAO";
import PlaneTypeDAO from "../DAO/PlaneTypeDAO";
import FlightAggregate from "../domain/Aggregates/FlightAggregate";

interface FlightAttributes {
  FlightId: number;
  FlightCode: string;
  DepartureId: number;
  DepartureDateTime: Date;
  DestinationId: number;
  DestinationDateTime: Date;
  StopOverId: number;
  AirlineCode: string;
  PlaneCode: string;
  Duration: Date;
}

class FlightRepository {
  public getFlight = async (
    flightId: number
  ): Promise<FlightAggregate | null> => {
    // instanttiate DAO and fetch flight by id
    const flightDAO = new FlightDAO();
    const flightObj: sequelize.models.Flight = await flightDAO.readFlight(
      flightId
    );

    if (flightObj == null) return null;
    console.log(flightObj);

    // create flight Aggregate
    let flightAggregate = new FlightAggregate(
      flightObj.FlightId,
      flightObj.FlightCode,
      flightObj.DepartureId,
      "",
      "",
      flightObj.DepartureDateTime,
      flightObj.DestinationId,
      "",
      "",
      flightObj.DestinationDateTime,
      flightObj.StopOverId,
      "",
      flightObj.AirlineCode,
      flightObj.PlaneCode,
      flightObj.Duration,
      0,
      0,
      0,
      0
    );

    // make other calls to fill out flight aggregate
    const locationDAO = new LocationDAO();
    const planeTypeDAO = new PlaneTypeDAO();

    // departure and desination locations
    const departureObj = await locationDAO.readLocation(flightObj.DepartureId);
    const destinationObj = await locationDAO.readLocation(
      flightObj.DestinationId
    );

    // planetype
    const planeTypeObj = await planeTypeDAO.readPlaneType(flightObj.PlaneCode);
    console.log(typeof flightObj.DepartureDateTime);

    if (departureObj == null || destinationObj == null || planeTypeObj == null)
      return flightAggregate;

    flightAggregate = new FlightAggregate(
      flightObj.FlightId,
      flightObj.FlightCode,
      flightObj.DepartureId,
      departureObj.LocationName,
      departureObj.LocationCode,
      flightObj.DepartureDateTime,
      flightObj.DestinationId,
      destinationObj.LocationName,
      destinationObj.LocationCode,
      flightObj.DestinationDateTime,
      flightObj.StopOverId,
      "",
      flightObj.AirlineCode,
      flightObj.PlaneCode,
      flightObj.Duration,
      planeTypeObj.NumFirstClass,
      planeTypeObj.NumBusiness,
      planeTypeObj.NumBusinessEconomy,
      planeTypeObj.NumEconomy
    );

    return flightAggregate;
  };
}

export default FlightRepository;
