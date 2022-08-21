class Invoice {
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

  // Getters
  public getTansactionId = (): number => {
    return this.transactionId;
  };
  public getDate = (): Date => {
    return this.date;
  };
  public getCreditCardNumber = (): string => {
    return this.creditCardNumber;
  };
  public getSubTotal = (): number => {
    return this.subTotal;
  };
  public getTax = (): number => {
    return this.tax;
  };
  public getRefundAmount = (): number => {
    return this.refundAmount;
  };

  // Setters
  public setTransactionId = (transactionId: number) => {
    this.transactionId = transactionId;
  };
  public setDate = (date: Date) => {
    this.date = date;
  };
  public setCreditCardNumber = (creditCardNumber: string) => {
    this.creditCardNumber = creditCardNumber;
  };
  public setSubTotal = (subTotal: number) => {
    this.subTotal = subTotal;
  };
  public setTax = (tax: number) => {
    this.tax = tax;
  };
  public setRefundAmount = (refundAmount: number) => {
    this.refundAmount = refundAmount;
  };
}

export default Invoice;
