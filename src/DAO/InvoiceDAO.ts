import { InvoiceOutput, Invoice } from "../database/models/Invoice";

class InvoiceDAO {
  private model: typeof Invoice;

  constructor() {
    this.model = Invoice;
  }

  public read = async (id: number): Promise<InvoiceOutput | null> => {
    return await this.model.findByPk(id);
  };

  public readForBooking = async (
    bookingId: number
  ): Promise<InvoiceOutput | null> => {
    return await this.model.findOne({ where: { BookingId: bookingId } });
  };

  public readAll = async (): Promise<InvoiceOutput[]> => {
    return await this.model.findAll();
  };

  public create = async (
    bookingId: number,
    date: Date,
    creditCardNumber: string,
    subTotal: number,
    tax: number,
    refundAmount: number
  ): Promise<InvoiceOutput | null> => {
    try {
      return await this.model.create({
        BookingId: bookingId,
        Date: date,
        CreditCardNumber: creditCardNumber,
        Subtotal: subTotal,
        Tax: tax,
        RefundAmount: refundAmount,
      });
    } catch (error: any) {
      return null;
    }
  };
}

export default InvoiceDAO;
