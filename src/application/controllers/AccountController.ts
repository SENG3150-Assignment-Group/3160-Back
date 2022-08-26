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
    this.router.get("/get", this.getAccount);
    this.router.post("/create", this.createAccount);
    this.router.post("/login", this.login);
    this.router.post("/setCreditCardDetails", this.setCreditCardDetails);
    this.router.delete("/delete", this.deleteAccount);
  };

  private getAccount = async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const accountID = parseInt(<string>req.query.accountId);
    const accountService: AccountService = new AccountServiceImpl();

    const account = await accountService.getAccount(accountID);
    if (account == null) {
      res.status(400).json(account);
      return;
    }
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

    const name: string = <string>req.body.fullname;
    const email: string = <string>req.body.email;
    const password: string = <string>req.body.password;
    const accountType: string = <string>req.body.permission;

    const accountService: AccountService = new AccountServiceImpl();

    const account = await accountService.createAccount(
      name,
      email,
      password,
      accountType
    );

    if (account == null) {
      res.status(400).json();
      return;
    }
    res.status(200).json({ id: account.getAccountId() });
  };

  private login = async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const email: string = <string>req.body.email;
    const password: string = <string>req.body.password;

    const accountService: AccountService = new AccountServiceImpl();

    const account = await accountService.login(email, password);

    if (account == null) {
      res.status(400).json();
      return;
    }
    res.status(200).json(account);
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
    const result = await accountService.deleteAccount(accountId);

    if (result == 0 || result == -1) {
      res.status(400).send();
      return;
    }

    res.status(200).json(result);
  };
}

export default AccountController;
