import LocationRepository from "../../repositories/LocationRepository";
import LocationAggregate from "../../domain/Aggregates/LocationAggregate";
import LocationService from "./LocationService";
import LocationDAO from "../../DAO/LocationDAO";
import Distance from "../../domain/Distance";
import DistanceDAO from "../../DAO/DistanceDAO";
import { DistanceOutput } from "../../database/models/Distance";

class LocationServiceImpl implements LocationService {
  public getLocations = async (): Promise<LocationAggregate[]> => {
    const locationRepository = new LocationRepository();
    return await locationRepository.getLocations();
  };

  public getDistances = async (): Promise<Distance[]> => {
    const distanceDAO = new DistanceDAO();
    const distModels = await distanceDAO.readAll();
    const distances = new Array<Distance>();

    for (const model of distModels) {
      distances.push(Distance.modelToDomain(model));
    }

    return distances;
  };

  public getLocationCount = async (): Promise<number> => {
    const locationDAO = new LocationDAO();
    return await locationDAO.getCount();
  };
}

export default LocationServiceImpl;
