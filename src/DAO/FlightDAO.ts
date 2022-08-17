import sequelize from "../../sequelize_setup";

class FlightDAO {
  private model;

  constructor() {
    this.model = sequelize.models.FlightModel;
  }

  public readAll = async () => {
    return await this.model.findAll();
  };
}

export default FlightDAO;
