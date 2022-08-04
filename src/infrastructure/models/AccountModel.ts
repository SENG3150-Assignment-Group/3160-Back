class AccountModel {
  accountID: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  watchlist: string[];
  groups: string[];
  preferences: string[];

  constructor(
    accountID: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    this.accountID = accountID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.watchlist = [];
    this.groups = [];
    this.preferences = [];
  }

  /*
   * Static factory method
   */
  public static createAccountModel = (
    accountID: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): AccountModel => {
    return new AccountModel(accountID, firstName, lastName, email, password);
  };

  /*
   * Getters
   */
  public getAccountID = (): string => {
    return this.accountID;
  };

  public getFirstName = (): string => {
    return this.firstName;
  };

  public getLastName = (): string => {
    return this.lastName;
  };

  public getEmail = (): string => {
    return this.email;
  };

  public getPassword = (): string => {
    return this.password;
  };

  public getWatchlist = (): string[] => {
    return this.watchlist;
  };

  public getGroups = (): string[] => {
    return this.groups;
  };

  public getPerferences = (): string[] => {
    return this.preferences;
  };

  /*
   * Setters
   */
  public setFirstName = (firstName: string) => {
    this.firstName = firstName;
  };

  public setLastName = (lastName: string) => {
    this.lastName = lastName;
  };

  public setEmail = (email: string) => {
    this.email = email;
  };

  public setPassword = (password: string) => {
    this.password = password;
  };

  public addToWatchlist = (flightID: string) => {
    this.watchlist.push(flightID);
  };

  public addToGroups = (groupID: string) => {
    this.groups.push(groupID);
  };

  public addToPreferences = (preferenceID: string) => {
    this.preferences.push(preferenceID);
  };
}

export default AccountModel;
