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
    this.router.post("/createBooking", this.createBooking);
    this.router.put("/updateBooking", this.updateBooking);
    this.router.post("/createTicket", this.createTicket);
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
    res.json(req.body);
    const accountId: number = parseInt(<string>req.body.accountId);
    const email: string = <string>req.body.accountEmail;

    // tickets
    const tickets = <Array<any>>req.body.tickets;
    console.log(tickets);

    const creditCardNumber = <string>req.body.creditCardNumber;
    const subTotal = parseFloat(<string>req.body.subTotal);
    const tax = parseFloat(<string>req.body.tax);
    const refundAmount = parseFloat(<string>req.body.price);

    const bookingService: BookingService = new BookingServiceImpl();

    res
      .status(200)
      .send(
        bookingService.createBooking(
          accountId,
          email,
          creditCardNumber,
          subTotal,
          tax,
          refundAmount,
          tickets
        )
      );
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

  private createTicket = async (
    req: express.Request,
    res: express.Response
  ) => {
    const tCode = <string>req.body.ticketCode;
    const tClass = <string>req.body.ticketClass;
    const price = parseFloat(<string>req.body.price);
    const flightId = parseFloat(<string>req.body.flightId);

    const ticketDAO = new TicketDAO();
    const ticket = await ticketDAO.altCreate(tCode, tClass, price, flightId);
    res.json(ticket);
  };
}

export default BookingController;
