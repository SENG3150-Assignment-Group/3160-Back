import BookingRepository from "../../repositories/BookingRepository";
import BookingAggregate from "../../domain/Aggregates/BookingAggregate";
import BookingService from "./BookingService";

class BookingServiceImpl implements BookingService {
  public getBookings = async (
    accountId: number
  ): Promise<BookingAggregate[] | null> => {
    const bookingRepository = new BookingRepository();
    return await bookingRepository.getBookings(accountId);
  };

  public createBooking = async (
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
    const bookingRepository = new BookingRepository();
    await bookingRepository.addBooking(
      accountId,
      email,
      ticketId,
      personType,
      specialRequests,
      dietaryPreferences,
      creditCardNumber,
      subTotal,
      tax,
      refundAmount
    );
    return null;
  };

  public updateBookings = async (
    accountId: number,
    bookingId: number,
    state: number
  ) => {
    const bookingRepository = new BookingRepository();
    await bookingRepository.updateBooking(accountId, bookingId, state);
  };
}

export default BookingServiceImpl;
