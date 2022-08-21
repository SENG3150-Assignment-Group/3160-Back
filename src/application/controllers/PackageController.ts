import express from "express";
import { checkSchema, validationResult } from "express-validator";

import Controller from "./Controller";
import GetPackageSchema from "./Schemas/GetAccountSchema";
import PackageService from "../services/PackageService";
import PackageServiceImpl from "../services/PackageServiceImpl";

class PackageController extends Controller {
    public path: string;
    public router: express.Router;
  
    constructor() {
      super();
      this.path = "/packages";
      this.router = express.Router();
      this.initializeRoutes();
    }

    public initializeRoutes = (): void => {
        this.router.get(
          this.path + "/getPackage",
          checkSchema(GetPackageSchema),
          this.getPackage
        );
        this.router.get(
          this.path + "/createPackage",
          //checkSchema(CreatePackageSchema),
          this.createPackage
        )
      };

      private getPackage = async (req: express.Request, res: express.Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        console.log(typeof req.query.id); 
        const packageID: string = <string>req.query.id;
        const packageService: PackageService = new PackageServiceImpl();
    
        const travelPackage = await packageService.getPackage(packageID);
        res.status(200).json(travelPackage);
        
      };

      private createPackage = async (req: express.Request, res: express.Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        
        const locationCode: string = <string>req.query.locationCode;
        const flightCode: string = <string>req.query.flightCode;
        const accountId: number = parseFloat(<string>req.query.accountId);
        const accomodation: string = <string>req.query.accomodation;
        const accomodationCost: number = parseFloat(<string>req.query.accomodationCost);

        const packageService: PackageService = new PackageServiceImpl();
        res 
          .status(200)
          .send(
            packageService.createAccount(
              locationCode,
              flightCode,
              accountId,
              accomodation,
              accomodationCost
            )
          );
      };
}

export default PackageController;