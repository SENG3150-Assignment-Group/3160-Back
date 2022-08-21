import BookingDAO from "../DAO/BookingDAO";
import TicketDAO from "../DAO/TicketDAO";
import InvoiceDAO from "../DAO/InvoiceDAO";
import { Model } from "sequelize/types";
import BookingAggregate from "../domain/Aggregates/BookingAggregate";
import Booking from "../domain/Booking";
import Invoice from "../domain/Invoice";
import Ticket from "../domain/Ticket";

interface BookingAttributes {
    BookingId: number;
    AccountId: number;
    Email: string;
    DateCreated: Date;
    State: number;
}

interface TicketAttributes {
    TicketCode: string;
    TicketClass: string;
    Price: number;
    Booked: boolean;
    Transferable: boolean;
    Exchangable: boolean;
    Refundable: boolean;
    AccountId: number;
    PersonType: string;
    SpecialRequests: string;
    DietaryPreferences: string;
    CarryOnBaggage: boolean;
    CheckedBaggage: boolean;
}

interface InvoiceAttributes {
    TransactionId: number;
    Date: Date;
    CreditCardNumber: string;
    Subtotal: number;
    Tax: number;
    RefundAmount: number;
}

class BookingRepository {
    public getBookings = async(accountId: number): Promise<BookingAggregate[]> => {
        const bookingDAO = new BookingDAO();
        const invocieDAO = new InvoiceDAO();
        const ticketDAO = new TicketDAO();
        const bookingAggregates: BookingAggregate[] =
            new Array<BookingAggregate>();

        //Get all bookings and tickets of a user
        const bookingModels: Model<BookingAttributes>[] =
            await bookingDAO.readAccountsBooking(accountId);
        const ticketModels: Model<TicketAttributes>[]
            = await ticketDAO.readAccountsTickets(accountId);

        let invoiceModels: Model<InvoiceAttributes>[];
        let booking: Booking;
        let ticket: Ticket;
        let invoice: Invoice;

        for (const bookingModel of bookingModels) {
            //For every booking get the invoice associated with it
            invoiceModels = await invocieDAO.readInvoice(bookingModel.BookingId);
        }

        for (let i = 0; i < ticketModels.length; i++) {
            // convert booking, ticket and invoice to domain objects
            booking = Booking.modelToDomain(bookingModels[i]);
        }

        return bookingAggregates;
    }

    public addBooking = async(): Promise<BookingAggregate> => {

    }
}