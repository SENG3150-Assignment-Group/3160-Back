import express from "express";
import { checkSchema, validationResult } from "express-validator";

import Controller from "./Controller";
import GetAccountSchema from "./Schemas/GetAccountSchema";
import CreateAccountSchema from "./Schemas/CreateAccountSchema";

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
    this.router.get(
      this.path + "/createAccount",
      checkSchema(CreateAccountSchema),
      this.createAccount
    )
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

  private createAccount = async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //const id: string = <string>req.query.accountId;
    const firstName: string = <string>req.query.firstName;
    const lastName: string = <string>req.query.lastName; 
    const email: string = <string>req.query.email; 
    const password: string = <string>req.query.password; 
    const creditCardNumber: string = <string>req.query.creditCardNumber;
    const creditCardDate: string = <string>req.query.creditCardDate; 
    const creditCardSecurity: string = <string> req.query.creditCardSecurity;

    const accountService: AccountService = new AccountServiceImpl();
    console.log("Controller Start")
    res
      .status(200)
      .send(
        accountService.createAccount(
          //id, 
          firstName,
          lastName,
          email,
          password,
          creditCardNumber,
          creditCardDate,
          creditCardSecurity
        )
      );

  };

  
}

export default AccountController;
