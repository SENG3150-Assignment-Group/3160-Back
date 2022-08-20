class Account {
  accountId: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;  
  creditCardNumber: string;
  creditCardDate: string;
  creditCardSecurity: string;

  constructor(
    accountId: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,    
    creditCardNumber: string,
    creditCardDate: string,
    creditCardSecurity: string
  ) {
    this.accountId = accountId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;    
    this.creditCardNumber = creditCardNumber;
    this.creditCardDate = creditCardDate;
    this.creditCardSecurity = creditCardSecurity;
  }

  // Getters
  public getAccountId = (): number => {
    return this.accountId;
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
  public getCreditCardNumber = (): string => {
    return this.creditCardNumber;
  };
  public getCreditCardDate = (): string => {
    return this.creditCardDate;
  };
  public getCreditCardSecurity = (): string => {
    return this.creditCardSecurity;
  };

  // Setters
  public setAccountId = (accountId: number) => {
    this.accountId = accountId;
  };
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
  public setCreditCardNumber = (creditCardNumber: string) => {
    this.creditCardNumber = creditCardNumber;
  };
  public setCreditCardDate = (creditCardDate: string) => {
    this.creditCardDate = creditCardDate;
  };
  public setCreditCardSecurity = (creditCardSecurity: string) => {
    this.creditCardSecurity = creditCardSecurity;
  };
}

export default Account;
