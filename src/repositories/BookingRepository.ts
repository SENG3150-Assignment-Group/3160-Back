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
  public getBookings = async (
    accountId: number
  ): Promise<BookingAggregate[] | null> => {
    const bookingDAO = new BookingDAO();
    const invocieDAO = new InvoiceDAO();
    const ticketDAO = new TicketDAO();
    const bookingAggregates: BookingAggregate[] = new Array<BookingAggregate>();

    //Get all bookings and tickets of a user
    const bookingModels: Model<any>[] | null =
      await bookingDAO.readAccountsBooking(accountId);

    const ticketModels: Model<any>[] | null =
      await ticketDAO.readAccountsTickets(accountId);

    let invoiceModelSingle: Model<any> | null;
    let invoiceModels: Model<any>[];
    let booking: Booking;
    let ticket: Ticket;
    let invoice: Invoice;

    if (bookingModels != null) {
      for (const bookingModel of bookingModels) {
        //For every booking get the invoice associated with it
        invoiceModelSingle = await invocieDAO.readInvoice(
          bookingModel.BookingId
        );
        if (invoiceModelSingle != null) {
          invoiceModels.push(invoiceModelSingle);
        }
      }
    } else return null;

    if (ticketModels != null) {
      for (let i = 0; i < ticketModels.length; i++) {
        // convert booking, ticket and invoice to domain objects
        booking = Booking.modelToDomain(bookingModels[i]);
        ticket = Ticket.modelToDomain(ticketModels[i]);
        invoice = Invoice.modelToDomain(invoiceModels[i]);
        bookingAggregates.push(new BookingAggregate(booking, ticket, invoice));
      }
    } else return null;

    return bookingAggregates;
  };

  public addBooking = async (
    accountId: number,
    email: string,
    ticketId: number,
    personType: string,
    specialRequests: string,
    dietaryPreferences: string,
    creditCardNumber: string,
    subTotal: number,
    tax: number,
    refundAmount: number
  ) => {
    const bookingDAO = new BookingDAO();
    bookingDAO.createBooking(
      accountId,
      email,
      new Date().setTime(Date.now()),
      State.Complete
    );

    const ticketDAO = new TicketDAO();
    ticketDAO.createTicket(
      ticketCode,
      ticketClass,
      price,
      booked,
      transferrable,
      exchangeable,
      refundable,
      accountId,
      personType,
      specialRequests,
      dietaryPreferences,
      carryOnBaggage,
      checkedBaggage
    );

    const invoiceDAO = new InvoiceDAO();
    invoiceDAO.createInvoice(
      date,
      creditCardNumber,
      subTotal,
      tax,
      refundAmount
    );
  };

  public updateBooking = async (
    accountId: number,
    bookingId: number,
    state: number
  ) => {
    const bookingDAO = new BookingDAO();
    bookingDAO.updateBooking(accountId, bookingId, state);
  };
}

export default BookingRepository;
