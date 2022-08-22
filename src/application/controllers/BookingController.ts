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
        this.router.get(this.path + "/getBookings", this.getBookings);
    };

    private getBookings = async (
        req: express.Request,
        res: express.Response
    ) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const accountId: number = parseFloat(<string>req.query.accountId);
        const bookingService: BookingService = new BookingServiceImpl();
        res
            .status(200)
            .send(
                bookingService.getBookings(accountId)
            );

    };

    private createBookings = async(
        req: express.Request,
        res: express.Response
    ) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const accountId: number = parseFloat(<string>req.query.accountId);
        const email: string = <string>req.query.accountEmail;
        const dateCreated: Date = new Date(<string>req.query.bookingDate);
        const state: number = parseFloat(<string>req.query.bookingState);
        const ticketCode: string = <string>req.query.ticketCode;
        const ticketClass: string = <string>req.query.ticketClass;
        const price: number = parseFloat(<string>req.query.price);
        const booked: boolean = (<string>req.query.price ==='true');
        const transferrable: boolean = (<string>req.query.transferable === 'true');
        const exchangeable: boolean = (<string>req.query.exchangable === 'true');
        const refundable: boolean = (<string>req.query.refundable === 'true');
        const personType: string = <string>req.query.personType;
        const specialRequests: string = <string>req.query.specialRequests;
        const dietaryPreferences: string = <string>req.query.dietaryPreferences;
        const carryOnBaggage: boolean = (<string>req.query.price === 'true');
        const checkedBaggage: boolean = (<string>req.query.price === 'true');
        const date: Date = new Date(<string>req.query.invoiceDate);
        const creditCardNumber: string = <string>req.query.creditCardNumber;
        const subTotal: number = parseFloat(<string>req.query.subTotal);
        const tax: number = parseFloat(<string>req.query.tax);
        const refundAmount: number = parseFloat(<string>req.query.price);

        const bookingService: BookingService = new BookingServiceImpl();
        res
            .status(200)
            .send(
                bookingService.createBookings(
                    accountId,
                    email,
                    dateCreated,
                    state,
                    ticketCode,
                    ticketClass,
                    price,
                    booked,
                    transferrable,
                    exchangeable,
                    refundable,
                    personType,
                    specialRequests,
                    dietaryPreferences,
                    carryOnBaggage,
                    checkedBaggage,
                    date,
                    creditCardNumber,
                    subTotal,
                    tax,
                    refundAmount
                )
        );
    }

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
            .send(
                bookingService.updateBookings(
                    accountId,
                    bookingId,
                    state
                )
            );
    }
}

export default BookingController;