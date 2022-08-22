import { Model, ModelStatic } from "sequelize/types";

import sequelize from "../database/";
import FlightDAO from "../DAO/FlightDAO";
import LocationDAO from "../DAO/LocationDAO";
import PlaneTypeDAO from "../DAO/PlaneTypeDAO";
import FlightAggregate from "../domain/Aggregates/FlightAggregate";

import { FlightInput, FlightOutput, Flight } from "../database/models/Flight";

class FlightRepository {
  private flightModel: ModelStatic<Model<any>>;

  constructor() {
    this.flightModel = Flight;
  }
  public getFlight = async (id: number): Promise<FlightAggregate | null> => {
    // instanttiate DAO and fetch flight by id
    const flightDAO = new FlightDAO();
    const flightObj: FlightOutput | null = await flightDAO.readFlight(id);

    if (flightObj == null) return null;

    //create flight Aggregate
    // let flightAggregate = new FlightAggregate(
    //   flightObj.FlightId,
    //   flightObj.FlightCode,
    //   flightObj.DepartureId,
    //   "",
    //   "",
    //   flightObj.DepartureDateTime,
    //   flightObj.DestinationId,
    //   "",
    //   "",
    //   flightObj.DestinationDateTime,
    //   flightObj.StopOverId,
    //   "",
    //   flightObj.AirlineCode,
    //   flightObj.PlaneCode,
    //   flightObj.Duration,
    //   0,
    //   0,
    //   0,
    //   0
    // );

    // make other calls to fill out flight aggregate
    // const locationDAO = new LocationDAO();
    // const planeTypeDAO = new PlaneTypeDAO();

    // // departure and desination locations
    // const departureObj = await locationDAO.readLocation(flightObj.DepartureId);
    // const destinationObj = await locationDAO.readLocation(
    //   flightObj.DestinationId
    // );

    // // planetype
    // const planeTypeObj = await planeTypeDAO.readPlaneType(flightObj.PlaneCode);
    // console.log(typeof flightObj.DepartureDateTime);

    // if (departureObj == null || destinationObj == null || planeTypeObj == null)
    //   return flightAggregate;

    /*flightAggregate = new FlightAggregate(
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
    );*/

    return null;
  };
}

export default FlightRepository;
