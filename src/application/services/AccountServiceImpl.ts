import AccountType from "../../domain/AccountType";
import AccountAggregate from "../../domain/Aggregates/AccountAggregate";
import AccountRepository from "../../repositories/AccountRepository";
import AccountService from "./AccountService";

class AccountServiceImpl implements AccountService {
  getAccount = async (accountId: number): Promise<AccountAggregate | null> => {
    const accountRepository = new AccountRepository();

    return await accountRepository.getAccount(accountId);
  };

  createAccount = async (
    name: string,
    email: string,
    password: string,
    accountType: string
  ): Promise<AccountAggregate | null> => {
    const accountRepository = new AccountRepository();

    const names = name.split(" ");
    return accountRepository.createAccount(
      <AccountType>accountType,
      names[0],
      names[1],
      email,
      password
    );
  };

  login = async (
    email: string,
    password: string
  ): Promise<AccountAggregate | null> => {
    const accountRepository = new AccountRepository();

    return accountRepository.login(email, password);
  };

  setCreditCardDetails = async (
    email: string,
    creditCardNumber: string,
    creditCardDate: string,
    creditCardSecurity: string
  ) => {
    const accountRepository = new AccountRepository();
    accountRepository.setCreditCardDetails(
      email,
      creditCardNumber,
      creditCardDate,
      creditCardSecurity
    );
  };

  deleteAccount = async (accountId: number): Promise<number> => {
    const accountRepository = new AccountRepository();
    return await accountRepository.deleteAccount(accountId);
  };
}
export default AccountServiceImpl;
