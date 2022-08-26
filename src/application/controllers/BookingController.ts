import BookingService from "../services/BookingService";
import BookingServiceImpl from "../services/BookingServiceImpl";
import express from "express";
import { checkSchema, validationResult } from "express-validator";

import Controller from "./Controller";
import TicketDAO from "../../DAO/TicketDAO";

class BookingController extends Controller {
  public path: string;
  public router: express.Router;

  constructor() {
    super();
    this.path = "/bookings";
    this.router = express.Router();
    this.initializeRoutes();
  }

  public initializeRoutes = (): void => {
    //this.router.get("/getBookings", this.getBookings);
    this.router.post("/create", this.createBooking);
    this.router.put("/update", this.updateBooking);
  };

  // private getBookings = async (req: express.Request, res: express.Response) => {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     return res.status(400).json({ errors: errors.abodyrray() });
  //   }

  //   const accountId: number = parseFloat(<string>req.query.accountId);
  //   const bookingService: BookingService = new BookingServiceImpl();
  //   res.status(200).send(bookingService.getBookings(accountId));
  // };

  private createBooking = async (
    req: express.Request,
    res: express.Response
  ) => {
    const accountId: number = parseInt(<string>req.body.account);
    const creditCardNumber = <string>req.body.cardNumber;
    const subTotal = parseFloat(<string>req.body.price);
    const flightCode = <string>req.body.flight;

    // tickets
    const tickets = <Array<any>>req.body.tickets;

    const bookingService: BookingService = new BookingServiceImpl();

    const bookingId = await bookingService.createBooking(
      accountId,
      creditCardNumber,
      subTotal,
      flightCode,
      tickets
    );

    if (bookingId == null) {
      res.status(400).send();
      return;
    }
    res.status(200).json({ id: bookingId });
  };

  private updateBooking = async (
    req: express.Request,
    res: express.Response
  ) => {
    const accountId: number = parseFloat(<string>req.query.accountId);
    const bookingId: number = parseFloat(<string>req.query.bookingId);
    const state: string = <string>req.query.state;

    const bookingService: BookingService = new BookingServiceImpl();
    res.status(200).send(bookingService.updateBooking(bookingId, state));
  };
}

export default BookingController;
