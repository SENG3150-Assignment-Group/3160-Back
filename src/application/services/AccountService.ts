import AccountAggregate from "domain/Aggregates/AccountAggregate";

interface AccountService {
  getAccount: (accountId: number) => Promise<AccountAggregate | null>;
  createAccount(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    accountType: string,
    creditCardNumber: string,
    creditCardDate: string,
    creditCardSecurity: string
  ): Promise<AccountAggregate | null>;
  setCreditCardDetails(
    email: string,
    creditCardNumber: string,
    creditCardDate: string,
    creditCardSecurity: string
  ): void;
  deleteAccount(accountId: number): Promise<number>;
}

export default AccountService;
