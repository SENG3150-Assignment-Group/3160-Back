class AccountAggregate {
    accountId: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    accountType: AccountType;
    creditCardNumber: string;
    creditCardDate: Date;
    creditCardSecurity: string;
  
    constructor(
      accountId: number,
      firstName: string,
      lastName: string,
      email: string,
      password: string,
      accountType: AccountType,
      creditCardNumber: string,
      creditCardDate: Date,
      creditCardSecurity: string
    ) {
      this.accountId = accountId;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.accountType = accountType;
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
    public getAccountType = (): AccountType => {
      return this.accountType;
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
    public setAccountType = (accountType: AccountType) => {
      this.accountType = accountType;
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
  
  export default AccountAggregate;
  