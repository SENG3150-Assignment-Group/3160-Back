import AccountDAO from "../DAO/AccountDAO";
import sequelize from "database";
import AccountAggregate from "../domain/Aggregates/AccountAggregate";

interface AccountAttributes {
 // AccountId: number;
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  AccountType: AccountType;
  CreditCardNumber: string;
  CreditCardDate: string;
  CreditCardSecurity: string;
}

class AccountRepository{
    public getAccount = async (
        accountId: number
    ): Promise<AccountAggregate | null> =>{
        //instantiate AccountDao
        const accountDao = new AccountDAO();
        const accountObj: sequelize.models.Account = await accountDao.readAccount(
            accountId
        );

        if (accountObj == null) return null;
        console.log(accountObj);

        //create account Aggregate
        const accountAggregate = new AccountAggregate(
            //accountObj.AccountId,
            accountObj.FirstName,
            accountObj.LastName,
            accountObj.Email,
            accountObj.Password,
            accountObj.AccountType,
            accountObj.CreditCardNumber,
            accountObj.CreditCardDate,
            accountObj.CreditCardSecurity
        );
            return accountAggregate;
        
    };

    public createAccount = async (
          firstName: string,
          lastName: string,
          email: string,
          password: string,
          creditCardNumber: string,
          creditCardDate: string,
          creditCardSecurity: string
    ) =>{
        const accountDao = new AccountDAO();
        console.log("Repo Start")
        console.log(typeof creditCardDate)
        //const dateToString = new Date(creditCardDate).toISOString().slice(0, 19).replace('T', ' ');
        accountDao.createAccount(firstName, lastName, email, password, creditCardNumber, creditCardDate, creditCardSecurity);
    }
}
export default AccountRepository;