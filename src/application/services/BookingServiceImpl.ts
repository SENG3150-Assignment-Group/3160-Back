import BookingRepository from "../../repositories/BookingRepository";
import BookingAggregate from "../../domain/Aggregates/BookingAggregate";
import BookingService from "./BookingService";
import Booking from "../../domain/Booking";
import State from "../../domain/State";
import Ticket from "../../domain/Ticket";
import Invoice from "../../domain/Invoice";

class BookingServiceImpl implements BookingService {
  public createBooking = async (
    accountId: number,
    creditCardNumber: string,
    subTotal: number,
    flightCode: string,
    ticketDetails: any[]
  ): Promise<number | null> => {
    const bookingRepository = new BookingRepository();
    const dateCreated = new Date();
    dateCreated.setTime(Date.now());

    const booking = new Booking(
      -1,
      accountId,
      "",
      dateCreated,
      State.Confirmed
    );

    const tickets = ticketDetails.map((t) => {
      return new Ticket(
        flightCode + "S" + t.seat,
        "",
        -1,
        false,
        false,
        false,
        false,
        t.fullname,
        "adult",
        "",
        "",
        false,
        false,
        -1,
        -1
      );
    });

    const invoice = new Invoice(
      -1,
      dateCreated,
      creditCardNumber,
      subTotal,
      subTotal * 0.1,
      0,
      -1
    );

    const bookingAgg = new BookingAggregate(booking, tickets, invoice);

    return await bookingRepository.addBooking(bookingAgg);
  };

  public updateBooking = async (
    bookingId: number,
    state: string
  ): Promise<BookingAggregate | null> => {
    const bookingRepository = new BookingRepository();
    await bookingRepository.updateBooking(bookingId, <State>state);
    return await bookingRepository.fetchBooking(bookingId);
  };
}
export default BookingServiceImpl;
