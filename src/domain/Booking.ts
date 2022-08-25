class Booking {
  //bookingId: number;
  accountId: number;
  email: string;
  dateCreated: Date;
  state: number;

  constructor(
   // bookingId: number,
    accountId: number,
    email: string,
    dateCreated: Date,
    state: number
  ) {
    //this.bookingId = bookingId;
    this.accountId = accountId;
    this.email = email;
    this.dateCreated = dateCreated;
    this.state = state;
  }

  // Getters
  /*public getBookingId = (): number => {
    return this.bookingId;
  };*/
  public getAccountId = (): number => {
    return this.accountId;
  };
  public getEmail = (): string => {
    return this.email;
  };
  public getDateCreated = (): Date => {
    return this.dateCreated;
  };
  public getState = (): number => {
    return this.state;
  };

  // Setters
  public setAccountId = (accountId: number) => {
    this.accountId = accountId;
  };
  /*public setBookingId = (bookingId: number) => {
    this.bookingId = bookingId;
  };*/
  public setEmail = (email: string) => {
    this.email = email;
  };
  public setDateCreated = (dateCreated: Date) => {
    this.dateCreated = dateCreated;
  };
  public setState = (state: number) => {
    this.state = state;
  };
}

export default Booking;
