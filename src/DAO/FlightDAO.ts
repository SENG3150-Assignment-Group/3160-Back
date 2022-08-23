import { FlightInput, FlightOutput, Flight } from "../database/models/Flight";

class FlightDAO {
  private model: typeof Flight;

  constructor() {
    this.model = Flight;
  }

  public readAll = async (): Promise<FlightOutput[]> => {
    return await this.model.findAll();
  };

  public read = async (id: number): Promise<FlightOutput | null> => {
    return await this.model.findByPk(id);
  };
}

export default FlightDAO;
