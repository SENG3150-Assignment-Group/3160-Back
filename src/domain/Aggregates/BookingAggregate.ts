import Booking from "../Booking";
import Invoice from "../Invoice";
import State from "../State";
import Ticket from "../Ticket";

class BookingAggregate {
  bookingId: number;
  accountId: number;
  email: string;
  dateCreated: Date;
  state: State;
  transactionId: number;
  date: Date;
  creditCardNumber: string;
  subTotal: number;
  tax: number;
  refundAmount: number;
  tickets: Ticket[];

  constructor(booking: Booking, tickets: Ticket[], invoice: Invoice) {
    this.bookingId = booking.getBookingId();
    this.accountId = booking.getAccountId();
    this.email = booking.getEmail();
    this.dateCreated = booking.getDateCreated();
    this.state = booking.getState();
    this.transactionId = invoice.getTansactionId();
    this.date = invoice.getDate();
    this.creditCardNumber = invoice.getCreditCardNumber();
    this.subTotal = invoice.getSubTotal();
    this.tax = invoice.getTax();
    this.refundAmount = invoice.getRefundAmount();
    this.tickets = tickets;
  }

  // Getters
  public getBookingId = (): number => {
    return this.bookingId;
  };
  public getAccountId = (): number => {
    return this.accountId;
  };
  public getEmail = (): string => {
    return this.email;
  };
  public getDateCreated = (): Date => {
    return this.dateCreated;
  };
  public getState = (): State => {
    return this.state;
  };
  public getTickets = (): Ticket[] => {
    return this.tickets;
  };
  public getTansactionId = (): number => {
    return this.transactionId;
  };
  public getDate = (): Date => {
    return this.date;
  };
  public getCreditCardNumber = (): string => {
    return this.creditCardNumber;
  };
  public getSubTotal = (): number => {
    return this.subTotal;
  };
  public getTax = (): number => {
    return this.tax;
  };
  public getRefundAmount = (): number => {
    return this.refundAmount;
  };

  // Setters
  public setAccountId = (accountId: number) => {
    this.accountId = accountId;
  };
  public setBookingId = (bookingId: number) => {
    this.bookingId = bookingId;
  };
  public setEmail = (email: string) => {
    this.email = email;
  };
  public setDateCreated = (dateCreated: Date) => {
    this.dateCreated = dateCreated;
  };
  public setTransactionId = (transactionId: number) => {
    this.transactionId = transactionId;
  };
  public setDate = (date: Date) => {
    this.date = date;
  };
  public setCreditCardNumber = (creditCardNumber: string) => {
    this.creditCardNumber = creditCardNumber;
  };
  public setSubTotal = (subTotal: number) => {
    this.subTotal = subTotal;
  };
  public setTax = (tax: number) => {
    this.tax = tax;
  };
  public setRefundAmount = (refundAmount: number) => {
    this.refundAmount = refundAmount;
  };
}

export default BookingAggregate;
