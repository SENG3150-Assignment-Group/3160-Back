import BookingService from "../services/BookingService";
import BookingServiceImpl from "../services/BookingServiceImpl";
import express from "express";
import { checkSchema, validationResult } from "express-validator";

import Controller from "./Controller";

class BookingController extends Controller {
  public path: string;
  public router: express.Router;

  constructor() {
    super();
    this.path = "/booking";
    this.router = express.Router();
    this.initializeRoutes();
  }

  public initializeRoutes = (): void => {
    this.router.get("/getBookings", this.getBookings);
    this.router.post("/createBooking", this.createBooking);
    this.router.put("/updateBooking", this.updateBooking);
  };

  private getBookings = async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const accountId: number = parseFloat(<string>req.query.accountId);
    const bookingService: BookingService = new BookingServiceImpl();
    res.status(200).send(bookingService.getBookings(accountId));
  };

  private createBooking = async (
    req: express.Request,
    res: express.Response
  ) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const accountId: number = parseInt(<string>req.body.accountId);
    const email: string = <string>req.body.accountEmail;

    // ticket
    const ticketId: number = parseInt(<string>req.body.ticketId);
    const personType: string = <string>req.body.personType;
    const specialRequests: string = <string>req.body.specialRequests;
    const dietaryPreferences: string = <string>req.body.dietaryPreferences;

    const creditCardNumber: string = <string>req.body.creditCardNumber;
    const subTotal: number = parseFloat(<string>req.body.subTotal);
    const tax: number = parseFloat(<string>req.body.tax);
    const refundAmount: number = parseFloat(<string>req.body.price);

    const bookingService: BookingService = new BookingServiceImpl();
    res
      .status(200)
      .send(
        bookingService.createBooking(
          accountId,
          email,
          ticketId,
          personType,
          specialRequests,
          dietaryPreferences,
          creditCardNumber,
          subTotal,
          tax,
          refundAmount
        )
      );
  };

  private updateBooking = async (
    req: express.Request,
    res: express.Response
  ) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const accountId: number = parseFloat(<string>req.query.accountId);
    const bookingId: number = parseFloat(<string>req.query.bookingId);
    const state: number = parseFloat(<string>req.query.state);

    const bookingService: BookingService = new BookingServiceImpl();
    res
      .status(200)
      .send(bookingService.updateBookings(accountId, bookingId, state));
  };
}

export default BookingController;
