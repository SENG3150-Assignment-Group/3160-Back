import LocationRepository from "../../repositories/LocationRepository";
import LocationAggregate from "../../domain/Aggregates/LocationAggregate";
import LocationService from "./LocationService";

class LocationServiceImpl implements LocationService {
  public getLocations = async (): Promise<LocationAggregate[]> => {
    const locationRepository = new LocationRepository();
    return await locationRepository.getLocations();
  };
}

export default LocationServiceImpl;
