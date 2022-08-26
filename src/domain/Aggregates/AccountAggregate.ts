import Booking from "../Booking";
import Package from "../Package";
import Account from "../Account";
import AccountType from "../AccountType";

class AccountAggregate {
  accountId: number;
  accountType: AccountType;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  creditCardNumber: string;
  creditCardDate: string;
  creditCardSecurity: string;
  packages: Package[];
  bookings: Booking[];

  constructor(account: Account, packages: Package[], bookings: Booking[]) {
    this.accountId = account.getAccountId();
    this.accountType = account.getAccountType();
    this.firstName = account.getFirstName();
    this.lastName = account.getLastName();
    this.email = account.getEmail();
    this.password = account.getPassword();
    this.creditCardNumber = account.getCreditCardNumber();
    this.creditCardDate = account.getCreditCardDate();
    this.creditCardSecurity = account.getCreditCardSecurity();
    this.packages = packages;
    this.bookings = bookings;
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
  public getCreditCardDate = (): string => {
    return this.creditCardDate;
  };
  public getCreditCardSecurity = (): string => {
    return this.creditCardSecurity;
  };
  public getPackages = (): Package[] => {
    return this.packages;
  };
  public getBookings = (): Booking[] => {
    return this.bookings;
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
  public setCreditCardDate = (creditCardDate: string) => {
    this.creditCardDate = creditCardDate;
  };
  public setCreditCardSecurity = (creditCardSecurity: string) => {
    this.creditCardSecurity = creditCardSecurity;
  };
}

export default AccountAggregate;
