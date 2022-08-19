import AccountAggregate from "domain/Aggregates/AccountAggregate";


interface AccountService {
    getAccount: (accountId: string) => Promise<AccountAggregate | null>;
    createAccount(
          id: string, 
          firstName: string,
          lastName: string,
          email: string,
          password: string,
          creditCardNumber: string,
          creditCardDate: Date,
          creditCardSecurity: string
    ):void ;
}

export default AccountService;