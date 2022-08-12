class WatchedFlights {
  accountID: string;
  flightID: string;
  dateAdded: string;

  constructor(accountID: string, flightID: string, dateAdded: string) {
    this.accountID = accountID;
    this.flightID = flightID;
    this.dateAdded = dateAdded;
  }

  /*
   * Getters
   */
  public getAccountID = (): string => {
    return this.accountID;
  };

  public getflightID = (): string => {
    return this.flightID;
  };

  public getDateAdded = (): string => {
    return this.dateAdded;
  };

  /*
   * Setters
   */
  public setAccountID = (accountID: string): void => {
    this.accountID = accountID;
  };

  public setflightID = (flightID: string): void => {
    this.flightID = flightID;
  };
}

export default WatchedFlights;
