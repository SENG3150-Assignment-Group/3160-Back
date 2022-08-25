import LocationService from "../services/LocationService";
import LocationServiceImpl from "../services/LocationServiceImpl";
import express from "express";
import { checkSchema, validationResult } from "express-validator";

import Controller from "./Controller";

class LocationController extends Controller {
  public path: string;
  public router: express.Router;

  constructor() {
    super();
    this.path = "/explore";
    this.router = express.Router();
    this.initializeRoutes();
  }

  public initializeRoutes = (): void => {
    this.router.get("/getLocations", this.getLocations);
    this.router.get("/getLocationCount", this.getLocationCount);
    this.router.get("/getDistances", this.getDistances);
  };

  private getLocations = async (
    req: express.Request,
    res: express.Response
  ) => {
    const locationService: LocationService = new LocationServiceImpl();
    const locations = await locationService.getLocations();
    console.log(locations);
    res.status(200).json(locations);
  };

  private getLocationCount = async (
    req: express.Request,
    res: express.Response
  ) => {
    const locationService: LocationService = new LocationServiceImpl();
    const count = await locationService.getLocationCount();

    res.status(200).json({ count: count });
  };

  private getDistances = async (
    req: express.Request,
    res: express.Response
  ) => {
    const locationService: LocationService = new LocationServiceImpl();
    const distances = await locationService.getDistances();

    res.status(200).json(distances);
  };
}

export default LocationController;
