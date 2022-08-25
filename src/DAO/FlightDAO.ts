import { Op } from "sequelize";
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

  public create = async (
    flightCode: string,
    departureId: number,
    departureDateTime: Date,
    destinationId: number,
    destinationDateTime: Date,
    airlineCode: string,
    planeCode: string,
    duration: string
  ): Promise<FlightOutput | null> => {
    const flight = await this.model.create({
      FlightCode: flightCode,
      DepartureId: departureId,
      DepartureDateTime: departureDateTime,
      DestinationId: destinationId,
      DestinationDateTime: destinationDateTime,
      AirlineCode: airlineCode,
      PlaneCode: planeCode,
      Duration: duration,
    });

    return flight;
  };

  public search = async (
    flights: any[],
    lowerbound: Date,
    upperbound: Date
  ): Promise<FlightOutput[]> => {
    return await this.model.findAll({
      where: {
        [Op.and]: [
          {
            DepartureDateTime: {
              [Op.between]: [lowerbound, upperbound],
            },
          },
          {
            [Op.or]: flights,
          },
        ],
      },
    });
  };
}

export default FlightDAO;
