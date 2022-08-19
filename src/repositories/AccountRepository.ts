import AccountDAO from "../DAO/AccountDAO";
import sequelize from "database";
import AccountAggregate from "../domain/Aggregates/AccountAggregate";

interface AccountAttributes {
  accountId: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  accountType: AccountType;
  creditCardNumber: string;
  creditCardDate: Date;
  creditCardSecurity: string;
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
            accountObj.AccountId,
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
}
export default AccountRepository;