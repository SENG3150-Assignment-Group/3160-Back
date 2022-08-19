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
    createAccount = async (
          id: string, 
          firstName: string,
          lastName: string,
          email: string,
          password: string,
          creditCardNumber: string,
          creditCardDate: Date,
          creditCardSecurity: string
    ) =>{
        console.log("AccountServiceImpl Start")
        const accountId = Number(id);
        const accountRepository = new AccountRepository();
        accountRepository.createAccount(
            accountId, 
            firstName,
            lastName,
            email,
            password,
            creditCardNumber,
            creditCardDate,
            creditCardSecurity
        )
    };
}
export default AccountServiceImpl;