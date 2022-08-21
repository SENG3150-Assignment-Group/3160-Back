import LocationAggregate from "../../domain/Aggregates/LocationAggregate";

interface LocationService {
  getLocations: () => Promise<LocationAggregate[]>;
}

export default LocationService;
