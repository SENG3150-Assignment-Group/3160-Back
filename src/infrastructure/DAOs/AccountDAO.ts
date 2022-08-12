import AccountModel from "../models/AccountModel";
import accountsJSON from "./dummyData/accounts.json";
import * as fse from "fs-extra";

class AccountDAO {
  accounts: AccountModel[] = [];

  constructor() {
    for (const account of accountsJSON.accounts) {
      this.accounts.push(
        new AccountModel(
          account.accountID,
          account.firstName,
          account.lastName,
          account.email,
          account.password
        )
      );
    }
  }

  public authenticate = (email: string, password: string): string | null => {
    for (const account of this.accounts) {
      if (account.email == email && account.password == password)
        return account.accountID;
    }
    return null;
  };

  public getFreeAccountID = () => {
    return `${this.accounts.length + 1}`;
  };

  public createAccount = async (
    accountModel: AccountModel
  ): Promise<AccountModel> => {
    this.accounts.push(accountModel);
    await fse.writeFile(
      "./src/infrastructure/DAOs/dummyData/accounts.json",
      JSON.stringify({ accounts: this.accounts })
    );

    return accountModel;
  };

  public readAccount = (accountID: string): AccountModel | null => {
    for (const account of this.accounts)
      if (account.getAccountID() == accountID) return account;
    return null;
  };

  public getAccountByEmail = (email: string): AccountModel | null => {
    for (const account of this.accounts)
      if (account.getEmail() == email) return account;
    return null;
  };

  public updateAccount = (
    accountID: string,
    dummyData: AccountModel
  ): AccountModel | null => {
    for (const account of this.accounts)
      if (account.getAccountID() == accountID) {
        if (dummyData.getFirstName() != "")
          account.setFirstName(dummyData.getFirstName());
        if (dummyData.getLastName() != "")
          account.setLastName(dummyData.getLastName());
        if (dummyData.getEmail() != "") account.setEmail(dummyData.getEmail());

        return account;
      }
    return null;
  };

  public deleteAccount = (accountID: string): boolean => {
    for (const account of this.accounts)
      if (account.getAccountID() == accountID) {
        const index = this.accounts.indexOf(account, 0);
        if (index > -1) {
          this.accounts.splice(index, 1);
        }
        return true;
      }
    return false;
  };
}

export default AccountDAO;
