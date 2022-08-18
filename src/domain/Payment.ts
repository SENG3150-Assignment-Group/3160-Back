class Payment {
  accountId: number;
  creditCardNumber: string;
  creditCardDate: Date;
  creditCardSecurity: string;

  constructor(
    accountId: number,
    creditCardNumber: string,
    creditCardDate: Date,
    creditCardSecurity: string
  ) {
    this.accountId = accountId;
    this.creditCardNumber = creditCardNumber;
    this.creditCardDate = creditCardDate;
    this.creditCardSecurity = creditCardSecurity;
  }

  // Getters
  public getAccountId = (): number => {
    return this.accountId;
  };
  public getCreditCardNumber = (): string => {
    return this.creditCardNumber;
  };
  public getCreditCardDate = (): Date => {
    return this.creditCardDate;
  };
  public getCreditCardSecurity = (): string => {
    return this.creditCardSecurity;
  };

  // Setters
  public setAccountId = (accountId: number) => {
    this.accountId = accountId;
  };
  public setCreditCardNumber = (creditCardNumber: string) => {
    this.creditCardNumber = creditCardNumber;
  };
  public setCreditCardDate = (creditCardDate: Date) => {
    this.creditCardDate = creditCardDate;
  };
  public setCreditCardSecurity = (creditCardSecurity: string) => {
    this.creditCardSecurity = creditCardSecurity;
  };
}

export default Payment;
