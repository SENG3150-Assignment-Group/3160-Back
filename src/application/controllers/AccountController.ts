import express from "express";
import { checkSchema, validationResult } from "express-validator";

import Controller from "./Controller";
import GetAccountSchema from "./Schemas/GetFlightSchema";
import SearchAccountSchema from "./Schemas/SearchFlightsSchema";

import AccountService from "../services/AccountService";
import AccountServiceImpl from "../services/AccountServiceImpl";

class AccountController extends Controller {
  public path: string;
  public router: express.Router;

  constructor() {
    super();
    this.path = "/accounts";
    this.router = express.Router();
    this.initializeRoutes();
  }

  public initializeRoutes = (): void => {
    this.router.get(
      this.path + "/getAccount",
      checkSchema(GetAccountSchema),
      this.getAccount
    );
  };

  private getAccount = async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(typeof req.query.id);
    const accountID: string = <string>req.query.id;
    const accountService: AccountService = new AccountServiceImpl();

    const account = await accountService.getAccount(accountID);
    res.status(200).json(account);
  };

  
}

export default AccountController;
