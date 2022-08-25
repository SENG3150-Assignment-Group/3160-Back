import DescriptorDAO from "../DAO/DescriptorDAO";
import LocationDAO from "../DAO/LocationDAO";
import LocationAggregate from "../domain/Aggregates/LocationAggregate";
import Descriptor from "../domain/Descriptor";
import Location from "../domain/Location";
import { LocationOutput } from "../database/models/Location";
import { DescriptorOutput } from "../database/models/Descriptor";

class LocationRepository {
  public getLocations = async (): Promise<LocationAggregate[]> => {
    const locationDAO = new LocationDAO();
    const descriptorDAO = new DescriptorDAO();
    const locationAggregates: LocationAggregate[] =
      new Array<LocationAggregate>();

    // get all locations
    const locationModels: LocationOutput[] = await locationDAO.readAll();

    let descriptorModels: DescriptorOutput[];
    let location: Location;
    let descriptors: Descriptor[];

    // for every location
    for (const locationModel of locationModels) {
      // get descriptors
      descriptorModels = await descriptorDAO.readDescriptorsForLocation(
        locationModel.LocationId
      );
      // convert to domain objects
      descriptors = new Array<Descriptor>();
      for (const descriptorModel of descriptorModels) {
        descriptors.push(Descriptor.modelToDomain(descriptorModel));
      }
      // convert location to domain object
      location = Location.modelToDomain(locationModel);
      locationAggregates.push(new LocationAggregate(location, descriptors));
    }

    return locationAggregates;
  };
}

export default LocationRepository;
