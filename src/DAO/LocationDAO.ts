import {
  LocationInput,
  LocationOutput,
  Location,
} from "../database/models/Location";

class LocationDAO {
  private model: typeof Location;

  constructor() {
    this.model = Location;
  }

  public read = async (id: number): Promise<LocationOutput | null> => {
    return await this.model.findByPk(id);
  };

  public readAll = async (): Promise<LocationOutput[]> => {
    return await this.model.findAll();
  };

  public getCount = async (): Promise<number> => {
    return await this.model.count();
  };
}

export default LocationDAO;
