import State from "../../domain/State";
import BookingAggregate from "../../domain/Aggregates/BookingAggregate";

interface BookingService {
  createBooking: (
    accountId: number,
    creditCardNumber: string,
    subTotal: number,
    flightCode: string,
    ticketDetails: any[]
  ) => Promise<number | null>;
  updateBooking: (
    bookingId: number,
    state: string
  ) => Promise<BookingAggregate | null>;
}

export default BookingService;
