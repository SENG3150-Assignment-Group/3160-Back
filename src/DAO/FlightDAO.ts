import { ModelStatic, Model } from "sequelize";
import sequelize from "../database/";

interface FlightAttributes {
  FlightId: number;
  FlightCode: string;
  DepartureId: number;
  DepartureCode: string;
  DepartureDateTime: Date;
  DestinationCode: string;
  DestinationId: number;
  DestinationDateTime: Date;
  StopOverCode: string;
  StopOverId: number;
  AirlineCode: string;
  PlaneCode: string;
  Duration: Date;
  NumSeats: number;
}

class FlightDAO {
  private model: ModelStatic<Model<FlightAttributes>>;

  constructor() {
    this.model = sequelize.models.Flight;
  }

  public readAll = async () => {
    return await this.model.findAll();
  };

  public readFlight = async (
    id: number
  ): Promise<Model<FlightAttributes, FlightAttributes> | null> => {
    return await this.model.findByPk(id);
  };
}

export default FlightDAO;
