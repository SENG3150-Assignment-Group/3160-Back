import FlightDAO from "../DAO/FlightDAO";
import LocationDAO from "../DAO/LocationDAO";
import PlaneTypeDAO from "../DAO/PlaneTypeDAO";
import FlightAggregate from "../domain/Aggregates/FlightAggregate";

import Flight from "../domain/Flight";
import Location from "../domain/Location";
import PlaneType from "../domain/PlaneType";

class FlightRepository {
  private flightModel: typeof Flight;

  constructor() {
    this.flightModel = Flight;
  }
  public getFlight = async (id: number): Promise<FlightAggregate | null> => {
    // instanttiate DAO and fetch flight by id
    const flightDAO = new FlightDAO();
    const flightModel = await flightDAO.read(id);

    if (flightModel == null) return null;

    // make other calls to fill out flight aggregate
    const locationDAO = new LocationDAO();
    const planeTypeDAO = new PlaneTypeDAO();

    // departure and desination locations
    const depModel = await locationDAO.read(flightModel.DepartureId);
    const destModel = await locationDAO.read(flightModel.DestinationId);
    const stopOverModel = await locationDAO.read(flightModel.StopOverId);

    // planetype
    const planeModel = await planeTypeDAO.read(flightModel.PlaneCode);

    if (depModel == null || destModel == null || planeModel == null)
      return null;

    const flight = Flight.modelToDomain(flightModel);
    const dep = Location.modelToDomain(depModel);
    const dest = Location.modelToDomain(destModel);
    const stopOver =
      stopOverModel == null ? null : Location.modelToDomain(stopOverModel);
    const plane = PlaneType.modelToDomain(planeModel);

    const flightAggregate = new FlightAggregate(
      flight,
      dep,
      dest,
      stopOver,
      plane
    );

    return flightAggregate;
  };
}

export default FlightRepository;
