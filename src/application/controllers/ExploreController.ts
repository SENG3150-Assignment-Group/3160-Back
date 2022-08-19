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
    this.router.get(this.path + "/getLocations", this.getLocations);
  };

  private getLocations = async (
    req: express.Request,
    res: express.Response
  ) => {
    const locationService: LocationService = new LocationServiceImpl();
    const locations = await locationService.getLocations();
    res.status(200).json(locations);
  };
}

export default LocationController;
