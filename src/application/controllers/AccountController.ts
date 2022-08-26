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
      "/getAccount",
      checkSchema(GetAccountSchema),
      this.getAccount
    );
    this.router.post(
      "/createAccount",
      checkSchema(CreateAccountSchema),
      this.createAccount
    );
    this.router.post("/setCreditCardDetails", this.setCreditCardDetails);
    this.router.post("/deleteAccount", this.deleteAccount);
  };

  private getAccount = async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const accountID = parseInt(<string>req.query.accountId);
    const accountService: AccountService = new AccountServiceImpl();

    const account = await accountService.getAccount(accountID);
    res.status(200).json(account);
  };

  private createAccount = async (
    req: express.Request,
    res: express.Response
  ) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const firstName: string = <string>req.body.firstName;
    const lastName: string = <string>req.body.lastName;
    const email: string = <string>req.body.email;
    const password: string = <string>req.body.password;
    const accountType: string = <string>req.body.accountType;
    const creditCardNumber: string = <string>req.body.creditCardNumber;
    const creditCardDate: string = <string>req.body.creditCardDate;
    const creditCardSecurity: string = <string>req.body.creditCardSecurity;

    const accountService: AccountService = new AccountServiceImpl();

    res
      .status(200)
      .send(
        await accountService.createAccount(
          firstName,
          lastName,
          email,
          password,
          accountType,
          creditCardNumber,
          creditCardDate,
          creditCardSecurity
        )
      );
  };

  //sets the creditCardDetails of account based on the unique email given
  private setCreditCardDetails = async (
    req: express.Request,
    res: express.Response
  ) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const accountEmail: string = <string>req.body.accountEmail;
    const creditCardNumber: string = <string>req.body.creditCardNumber;
    const creditCardDate: string = <string>req.body.creditCardDate;
    const creditCardSecurity: string = <string>req.body.creditCardSecurity;
    const accountService: AccountService = new AccountServiceImpl();

    const account = await accountService.setCreditCardDetails(
      accountEmail,
      creditCardNumber,
      creditCardDate,
      creditCardSecurity
    );

    res.status(200).json(account);
  };

  //deletes account connected to given Email
  private deleteAccount = async (
    req: express.Request,
    res: express.Response
  ) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const accountId = parseInt(<string>req.body.accountId);
    const accountService = new AccountServiceImpl();
    const account = await accountService.deleteAccount(accountId);

    res.status(200).json(account);
  };
}

export default AccountController;
