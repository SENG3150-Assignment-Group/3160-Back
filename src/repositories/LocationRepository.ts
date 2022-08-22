import DescriptorDAO from "../DAO/DescriptorDAO";
import LocationDAO from "../DAO/LocationDAO";
import { Model } from "sequelize/types";
import LocationAggregate from "../domain/Aggregates/LocationAggregate";
import Descriptor from "../domain/Descriptor";
import Location from "../domain/Location";

interface LocationAttributes {
  LocationName: string;
  LocationId: number;
  AirportCode: string;
  Restricted: boolean;
  CountryCode3: string;
  RestricationStart: Date;
  RestricationEnd: Date;
}

interface DescriptorAttributes {
  DescriptorId: number;
  CategoryId: number;
  Name: string;
  //TODO Name in database is descriptorName in domain
}

class LocationRepository {
  public getLocations = async (): Promise<LocationAggregate[]> => {
    const locationDAO = new LocationDAO();
    const descriptorDAO = new DescriptorDAO();
    const locationAggregates: LocationAggregate[] =
      new Array<LocationAggregate>();

    // get all locations
    const locationModels: Model<LocationAttributes>[] =
      await locationDAO.readAllLocations();

    let descriptorModels: Model<DescriptorAttributes>[];
    let location: Location;
    let descriptors: Descriptor[];

    // for every location
    // for (const locationModel of locationModels) {
    //   // get descriptors
    //   descriptorModels = await descriptorDAO.readDescriptorsForLocation(
    //     locationModel.getDataValue("LocationId")
    //   );
    //   // convert to domain objects
    //   descriptors = new Array<Descriptor>();
    //   for (const descriptorModel of descriptorModels) {
    //     descriptors.push(Descriptor.modelToDomain(descriptorModel));
    //   }
    //   // convert location to domain object
    //   location = Location.modelToDomain(locationModel);
    //   locationAggregates.push(new LocationAggregate(location, descriptors));
    // }

    return locationAggregates;
  };
}

export default LocationRepository;
