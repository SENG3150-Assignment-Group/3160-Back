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
        const bookingService: BookingService = new BookingServiceImpl();
        const bookings = await bookingService.getBookings(/*Some Request*/);
        res.status(200).json(bookings);
    };

    private createBookings = async(
        req: express.Request,
        res: express.Response
    ) => {
        const bookingService: BookingService = new BookingServiceImpl();
        await bookingService.createBookings(/*Some Request*/);
    }

    private updateBooking = async (
        req: express.Request,
        res: express.Response
    ) => {
        const bookingService: BookingService = new BookingServiceImpl();
        await bookingService.updateBookings(/*Some Request*/);
    }
}

export default BookingController;