import { ModelStatic, Model } from "sequelize";
import sequelize from "../database/";

interface AccountAttributes {
    accountId: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;    
    creditCardNumber: string;
    creditCardDate: Date;
    creditCardSecurity: string;
  }

class AccountDAO {
  private model: ModelStatic<Model<AccountAttributes>>;

  constructor() {
    this.model = sequelize.models.Account;
  }

  public readAll = async () => {
    return await this.model.findAll();
  };

  public readAccount = async (
    id: number
  ): Promise<Model<AccountAttributes> | null> => {
    return await this.model.findByPk(id);
  };

  public createAccount = async (
    accountId: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    creditCardNumber: string,
    creditCardDate: Date,
    creditCardSecurity: string
  ) => {
      console.log("Dao Start")
      console.log(accountId + " " + firstName + " " + lastName + " " + email+ " " + password + " " + creditCardNumber + " " + creditCardDate + " " + creditCardSecurity)
      await this.model.create({
      //TODO Test model creation (causing notNull Validation issue)
      accountId: accountId,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,      
      creditCardNumber: creditCardNumber,
      creditCardDate: creditCardDate,
      creditCardSecurity: creditCardSecurity
    });
  };
}

export default AccountDAO;
