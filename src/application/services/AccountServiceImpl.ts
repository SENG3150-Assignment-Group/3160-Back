import AccountAggregate from "../../domain/Aggregates/AccountAggregate";
import AccountRepository from "../../repositories/AccountRepository";
import AccountService from "./AccountService";

class AccountServiceImpl implements AccountService {
    getAccount = async (id: string): Promise<AccountAggregate | null> => {
        const accountId = Number(id);

        const accountRepository = new AccountRepository();

        const account = await accountRepository.getAccount(accountId);
        return account;
    };
}
export default AccountServiceImpl;