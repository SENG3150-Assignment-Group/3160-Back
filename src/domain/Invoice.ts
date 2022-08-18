class Invoice{
    transactionId: number;
    date: Date;
    creditCardNumber: string;
    subTotal: number;
    tax: number;
    refundAmount: number;

    constructor(
        transactionId: number,
        date: Date,
        creditCardNumber: string,
        subTotal: number,
        tax: number,
        refundAmount: number
    ) {
        this.transactionId = transactionId;
        this.date = date;
        this.creditCardNumber = creditCardNumber;
        this.subTotal = subTotal;
        this.tax = tax;
        this.refundAmount = refundAmount;
    }
}
export default Invoice;