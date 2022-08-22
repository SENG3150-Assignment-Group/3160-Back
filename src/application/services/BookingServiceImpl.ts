import BookingRepository from "../../repositories/BookingRepository";
import BookingAggregate from "../../domain/Aggregates/BookingAggregate";
import BookingService from "./BookingService";

class BookingServiceImpl implements BookingService {
    public getBookings = async (accountId: number): Promise<BookingAggregate[] | null> => {
        const bookingRepository = new BookingRepository();
        return await bookingRepository.getBookings(accountId);
    };

    public createBookings = async (
        accountId: number,
        email: string,
        dateCreated: Date,
        state: number,
        ticketCode: string,
        ticketClass: string,
        price: number,
        booked: boolean,
        transferrable: boolean,
        exchangeable: boolean,
        refundable: boolean,
        personType: string,
        specialRequests: string,
        dietaryPreferences: string,
        carryOnBaggage: boolean,
        checkedBaggage: boolean,
        date: Date,
        creditCardNumber: string,
        subTotal: number,
        tax: number,
        refundAmount: number
    ) =>
    {
        const bookingRepository = new BookingRepository();
        await bookingRepository.addBooking(accountId,
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
        refundAmount);
    };

    public updateBookings = async (accountId: number, bookingId: number, state: number) =>
    {
        const bookingRepository = new BookingRepository();
        await bookingRepository.updateBooking(accountId, bookingId, state);
    };
}

export default BookingServiceImpl;