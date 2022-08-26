import AccountAggregate from "domain/Aggregates/AccountAggregate";

interface AccountService {
  getAccount: (accountId: number) => Promise<AccountAggregate | null>;
  createAccount(
    name: string,
    email: string,
    password: string,
    accountType: string
  ): Promise<AccountAggregate | null>;
  login(email: string, password: string): Promise<AccountAggregate | null>;
  setCreditCardDetails(
    email: string,
    creditCardNumber: string,
    creditCardDate: string,
    creditCardSecurity: string
  ): void;
  deleteAccount(accountId: number): Promise<number>;
}

export default AccountService;
