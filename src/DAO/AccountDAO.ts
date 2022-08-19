import { ModelStatic, Model } from "sequelize";
import sequelize from "../database/";

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
}

export default AccountDAO;
