class WatchedFlightsModel {
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
}

export default WatchedFlightsModel;
