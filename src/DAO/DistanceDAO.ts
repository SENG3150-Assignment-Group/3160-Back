import {
  DistanceInput,
  DistanceOutput,
  Distance,
} from "../database/models/Distance";

class DistanceDAO {
  private model: typeof Distance;

  constructor() {
    this.model = Distance;
  }

  public read = async (id: number): Promise<DistanceOutput | null> => {
    return await this.model.findByPk(id);
  };

  public readAll = async (): Promise<DistanceOutput[]> => {
    return await this.model.findAll();
  };
}

export default DistanceDAO;
