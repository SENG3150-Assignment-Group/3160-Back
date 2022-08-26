import express from "express";
import { checkSchema, validationResult } from "express-validator";

import Controller from "./Controller";
import GetFlightSchema from "./Schemas/GetFlightSchema";
import SearchFlightsSchema from "./Schemas/SearchFlightsSchema";

import FlightService from "../services/FlightService";
import FlightServiceImpl from "../services/FlightServiceImpl";

class FlightController extends Controller {
  public path: string;
  public router: express.Router;

  constructor() {
    super();
    this.path = "/flights";
    this.router = express.Router();
    this.initializeRoutes();
  }

  public initializeRoutes = (): void => {
    this.router.get("/getFlight", checkSchema(GetFlightSchema), this.getFlight);
    this.router.get(
      "/search",
      checkSchema(SearchFlightsSchema),
      this.searchFlights
    );
    this.router.get("/createFlight", this.createFlight);
  };

  private getFlight = async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(typeof req.query.id);
    const flightID: string = <string>req.query.id;
    const flightSearchService: FlightService = new FlightServiceImpl();

    const flight = await flightSearchService.getFlight(flightID);
    res.status(200).json(flight);
  };

  private searchFlights = async (
    req: express.Request,
    res: express.Response
  ) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const [departure, destination, startDate, endDate, isOneWay, seats] = [
      <number>(<unknown>req.query.departure),
      <number>(<unknown>req.query.destination),
      <Date>(<unknown>req.query.startDate),
      <Date>(<unknown>req.query.endDate),
      <boolean>(<unknown>req.query.isOneWay),
      <number>(<unknown>req.query.seats),
    ];

    const flightSearchService: FlightService = new FlightServiceImpl();
    const results = await flightSearchService.searchFlights(
      departure,
      destination,
      startDate,
      endDate,
      isOneWay,
      seats
    );

    res.status(200).json(results);
  };

  private createFlight = async (
    req: express.Request,
    res: express.Response
  ) => {
    const [
      flightCode,
      departureId,
      departureDateTime,
      destinationId,
      destinationDateTime,
      airlineCode,
      planeCode,
      duration,
    ] = [
      <string>(<unknown>req.query.flightCode),
      <number>(<unknown>req.query.departureId),
      <Date>(<unknown>req.query.departureDateTime),
      <number>(<unknown>req.query.destinationId),
      <Date>(<unknown>req.query.destinationDateTime),
      <string>(<unknown>req.query.airlineCode),
      <string>(<unknown>req.query.planeCode),
      <string>(<unknown>req.query.duration),
    ];

    const flightService: FlightService = new FlightServiceImpl();
    const flight = await flightService.createFlight(
      flightCode,
      departureId,
      departureDateTime,
      destinationId,
      destinationDateTime,
      airlineCode,
      planeCode,
      duration
    );
    res.status(200).json(flight);
  };
}

export default FlightController;
