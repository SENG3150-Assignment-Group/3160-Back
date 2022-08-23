import LocationAggregate from "../../domain/Aggregates/LocationAggregate";
import Distance from "../../domain/Distance";

interface LocationService {
  getLocations: () => Promise<LocationAggregate[]>;
  getDistances: () => Promise<Distance[]>;
  getLocationCount: () => Promise<number>;
}

export default LocationService;
