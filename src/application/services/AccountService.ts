import AccountAggregate from "domain/Aggregates/AccountAggregate";


interface AccountService {
    getAccount: (accountId: string) => Promise<AccountAggregate | null>;
}

export default AccountService;