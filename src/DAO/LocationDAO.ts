import { ModelStatic, Model } from "sequelize";
import sequelize from "../database/";

interface LocationAttributes {
  LocationName: string;
  LocationId: number;
  AirportCode: string;
  Restricted: boolean;
  CountryCode3: string;
  RestrictionStart: Date;
  RestrictionEnd: Date;
}

class LocationDAO {
  private model: ModelStatic<Model<LocationAttributes>>;

  constructor() {
    this.model = sequelize.models.Location;
  }

  public readLocation = async (
    locationId: number
  ): Promise<Model<LocationAttributes> | null> => {
    return await this.model.findByPk(locationId);
  };

  public readAllLocations = async (): Promise<Model<LocationAttributes>[]> => {
    return await this.model.findAll();
  };
}

export default LocationDAO;
