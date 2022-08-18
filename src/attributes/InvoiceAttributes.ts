interface InvoiceAttributes {
    TransactionId: number;
    Date: Date;
    CreditCardNumber: string;
    Subtotal: number;
    Tax: number;
    RefundAmount: number;
}
export default InvoiceAttributes;