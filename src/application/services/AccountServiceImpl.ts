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
      
          firstName: string,
          lastName: string,
          email: string,
          password: string,
          accountType: string,
          creditCardNumber: string,
          creditCardDate: string,
          creditCardSecurity: string
    ) =>{
        console.log("AccountServiceImpl Start")
   
        const accountRepository = new AccountRepository();
        accountRepository.createAccount(
            firstName,
            lastName,
            email,
            password,
            accountType,
            creditCardNumber,
            creditCardDate,
            creditCardSecurity
        )
    };

    setCreditCardDetails = async(
        email: string,
        creditCardNumber: string,
        creditCardDate: string,
        creditCardSecurity: string
    )=>{
        const accountRepository = new AccountRepository();
        accountRepository.setCreditCardDetails(
            email,
            creditCardNumber,
            creditCardDate,
            creditCardSecurity
        )
    };

    deleteAccount = async(
        email: string
    )=>{
        const accountRepository = new AccountRepository();
        accountRepository.deleteAccount(email);
    }
}
export default AccountServiceImpl;