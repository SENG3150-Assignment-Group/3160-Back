import AccountType from "../domain/AccountType";
import { Account, AccountOutput } from "../database/models/Account";
import { Op } from "sequelize";

class AccountDAO {
  private model: typeof Account;

  constructor() {
    this.model = Account;
  }

  public readAll = async (): Promise<AccountOutput[]> => {
    return await this.model.findAll();
  };

  public read = async (id: number): Promise<AccountOutput | null> => {
    return await this.model.findByPk(id);
  };

  public create = async (
    accountType: AccountType,
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<AccountOutput | null> => {
    try {
      return await this.model.create({
        AccountType: accountType,
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        Password: password,
      });
    } catch (error: any) {
      return null;
    }
  };

  public readByEmailPassword = async (
    email: string,
    password: string
  ): Promise<AccountOutput | null> => {
    return await this.model.findOne({
      where: {
        [Op.and]: [{ Email: email }, { Password: password }],
      },
    });
  };

  public setCreditCardDetails = async (
    email: string,
    creditCardNumber: string,
    creditCardDate: string,
    creditCardSecurity: string
  ): Promise<number[]> => {
    try {
      return await this.model.update(
        {
          CreditCardNumber: creditCardNumber,
          CreditCardDate: creditCardDate,
          CreditCardSecurity: creditCardSecurity,
        },
        {
          where: {
            Email: email,
          },
        }
      );
    } catch (error: any) {
      return [0, -1];
    }
  };

  public delete = async (id: number): Promise<number> => {
    try {
      return await this.model.destroy({
        where: {
          AccountId: id,
        },
      });
    } catch (error: any) {
      return -1;
    }
  };
}

export default AccountDAO;
