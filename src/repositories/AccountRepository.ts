import AccountDAO from "DAO/AccountDAO";
import sequelize from "database";
import AccountAggregate from "domain/Aggregates/AccountAggregate";

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
        let accountAggregate = new AccountAggregate(
            accountObj.accountId,
            accountObj.firstName,
            accountObj.lastName,
            accountObj.email,
            accountObj.password,
            accountObj.accountType,
            accountObj.creditCardNumber,
            accountObj.creditCardDate,
            accountObj.creditCardSecurity
        );
            return accountAggregate;
        
    };
}
export default AccountRepository;