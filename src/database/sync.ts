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
  await Country.sync({ alter: false });
  await Airline.sync({ force: false });
  await PlaneType.sync({ force: false });
  await Location.sync({ force: false });
  await Distance.sync({ force: false });
  await Descriptor.sync({ force: false });
  await LocationDescriptor.sync({ force: false });
  await Flight.sync({ force: false });
};

export default sync;
