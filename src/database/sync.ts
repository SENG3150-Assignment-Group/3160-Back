import {
  Country,
  Airline,
  PlaneType,
  Location,
  Distance,
  Descriptor,
  LocationDescriptor,
  Flight,
} from "./models";

const sync = async () => {
  await Country.sync({ force: true });
  await Airline.sync({ force: true });
  await PlaneType.sync({ force: true });
  await Location.sync({ force: true });
  await Distance.sync({ force: true });
  await Descriptor.sync({ force: true });
  await LocationDescriptor.sync({ force: true });
  await Flight.sync({ force: true });
};

export default sync;
