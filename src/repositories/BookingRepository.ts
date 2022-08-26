import BookingDAO from "../DAO/BookingDAO";
import TicketDAO from "../DAO/TicketDAO";
import InvoiceDAO from "../DAO/InvoiceDAO";
import BookingAggregate from "../domain/Aggregates/BookingAggregate";
import Booking from "../domain/Booking";
import Invoice from "../domain/Invoice";
import Ticket from "../domain/Ticket";
import State from "../domain/State";

class BookingRepository {
  public addBooking = async (bookingAggregate: BookingAggregate) => {
    const bookingDAO = new BookingDAO();
    const ticketDAO = new TicketDAO();
    const invoiceDAO = new InvoiceDAO();

    const date = new Date();
    date.setTime(Date.now());

    const booking = await bookingDAO.create(
      bookingAggregate.getAccountId(),
      bookingAggregate.getEmail(),
      bookingAggregate.getDate(),
      bookingAggregate.getState()
    );

    if (booking == null) return;

    for (const ticket of bookingAggregate.tickets) {
      ticketDAO.update(
        ticket.getTicketCode(),
        ticket.getPersonName(),
        ticket.getPersonType(),
        ticket.getSpecialRequests(),
        ticket.getDietaryPreferences(),
        booking.BookingId
      );
    }

    invoiceDAO.create(
      booking.BookingId,
      bookingAggregate.getDate(),
      bookingAggregate.getCreditCardNumber(),
      bookingAggregate.getSubTotal(),
      bookingAggregate.getTax(),
      bookingAggregate.getRefundAmount()
    );
  };

  public updateBooking = async (bookingId: number, state: State) => {
    const bookingDAO = new BookingDAO();
    bookingDAO.update(bookingId, state);
  };

  public fetchBooking = async (
    bookingId: number
  ): Promise<BookingAggregate | null> => {
    const bookingDAO = new BookingDAO();
    const bookingModel = await bookingDAO.read(bookingId);

    if (bookingModel == null) return null;

    const ticketDAO = new TicketDAO();
    const invoiceDAO = new InvoiceDAO();

    const ticketModels = await ticketDAO.readAllForBooking(
      bookingModel.BookingId
    );
    const invoiceModel = await invoiceDAO.readForBooking(
      bookingModel.BookingId
    );

    if (invoiceModel == null || ticketModels == null) return null;

    const booking = Booking.modelToDomain(bookingModel);
    const invoice = Invoice.modelToDomain(invoiceModel);
    const tickets = new Array<Ticket>();
    for (const model of ticketModels) {
      tickets.push(Ticket.modelToDomain(model));
    }

    return new BookingAggregate(booking, tickets, invoice);
  };
}

export default BookingRepository;
