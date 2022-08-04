class FlightPreferencesModel {
  accountID: string;
  preferenceID: string;

  constructor(accountID: string, preferenceID: string) {
    this.accountID = accountID;
    this.preferenceID = preferenceID;
  }

  /*
   * Getters
   */
  public getAccountID = (): string => {
    return this.accountID;
  };

  public getPreferenceID = (): string => {
    return this.preferenceID;
  };
}

export default FlightPreferencesModel;
