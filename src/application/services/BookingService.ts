import BookingAggregate from "../../domain/Aggregates/BookingAggregate";

interface BookingService {
    getBookings: (accountId: number) => Promise<BookingAggregate[] | null>;
    createBookings: (
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
    ) => {};
    updateBookings: (accountId: number, bookingId: number, state: number) => {};
}

export default BookingService;