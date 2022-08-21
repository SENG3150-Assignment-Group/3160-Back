import AccountAggregate from "domain/Aggregates/AccountAggregate";


interface AccountService {
    getAccount: (accountId: string) => Promise<AccountAggregate | null>;
    createAccount(
          firstName: string,
          lastName: string,
          email: string,
          password: string,
          accountType: string,
          creditCardNumber: string,
          creditCardDate: string,
          creditCardSecurity: string
    ):void ;
    setCreditCardDetails(
        email: string,
        creditCardNumber: string,
        creditCardDate: string,
        creditCardSecurity: string
    ):void;
    deleteAccount(
        email: string
    ):void;
}

export default AccountService;