import BookingAggregate from "../../domain/Aggregates/BookingAggregate";

interface BookingService {
  getBookings: (accountId: number) => Promise<BookingAggregate[] | null>;
  createBooking: (
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
  ) => Promise<null>;
  updateBooking: (
    accountId: number,
    bookingId: number,
    state: number
  ) => Promise<BookingAggregate>;
}

export default BookingService;
