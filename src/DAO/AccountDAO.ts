import { ModelStatic, Model } from "sequelize";
import sequelize from "../database/";

interface AccountAttributes {    
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;    
    CreditCardNumber: string;
    CreditCardDate: Date;
    CreditCardSecurity: string;
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
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    creditCardNumber: string,
    creditCardDate: Date,
    creditCardSecurity: string
  ) => {
      console.log("Dao Start")
      console.log(firstName + " " + lastName + " " + email+ " " + password + " " + creditCardNumber + " " + creditCardDate + " " + creditCardSecurity)
      await this.model.create({
      //TODO Test model creation (causing notNull Validation issue)     
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Password: password,      
      CreditCardNumber: creditCardNumber,
      CreditCardDate: creditCardDate,
      CreditCardSecurity: creditCardSecurity
    });
  };
}

export default AccountDAO;
