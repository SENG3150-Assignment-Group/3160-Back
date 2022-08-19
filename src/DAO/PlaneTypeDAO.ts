import { ModelStatic, Model } from "sequelize";
import sequelize from "../database/";

interface PlaneTypeAttributes {
  PlaneCode: string;
  Type: string;
  NumFirstClass: number;
  NumBusiness: number;
  NumPremiumEconomy: number;
  NumEconomy: number;
}

class PlaneTypeDAO {
  private model: ModelStatic<Model<PlaneTypeAttributes>>;

  constructor() {
    this.model = sequelize.models.PlaneType;
  }

  public readPlaneType = async (
    locationId: number
  ): Promise<Model<PlaneTypeAttributes> | null> => {
    return await this.model.findByPk(locationId);
  };
}

export default PlaneTypeDAO;
