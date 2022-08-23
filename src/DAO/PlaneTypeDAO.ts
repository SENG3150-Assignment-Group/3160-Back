import { PlaneType, PlaneTypeOutput } from "../database/models/PlaneType";

class PlaneTypeDAO {
  private model: typeof PlaneType;

  constructor() {
    this.model = PlaneType;
  }

  public read = async (code: string): Promise<PlaneTypeOutput | null> => {
    return await this.model.findByPk(code);
  };
}

export default PlaneTypeDAO;
