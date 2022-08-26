import State from "../../domain/State";
import BookingAggregate from "../../domain/Aggregates/BookingAggregate";

interface BookingService {
  createBooking: (
    accountId: number,
    email: string,
    creditCardNumber: string,
    subTotal: number,
    tax: number,
    refundAmount: number,
    ticketDetails: any[]
  ) => Promise<BookingAggregate | null>;
  updateBooking: (
    bookingId: number,
    state: string
  ) => Promise<BookingAggregate | null>;
}

export default BookingService;
