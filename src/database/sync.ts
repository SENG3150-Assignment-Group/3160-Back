import {
  Country,
  Airline,
  PlaneType,
  Location,
  Distance,
  Descriptor,
  LocationDescriptor,
  Flight,
  Account,
  Booking,
  Invoice,
  Ticket,
  Package,
} from "./models";

const mode = true;

const sync = async () => {
  await Country.sync({ force: mode });
  await Airline.sync({ force: mode });
  await PlaneType.sync({ force: mode });
  await Location.sync({ force: mode });
  await Distance.sync({ force: mode });
  await Descriptor.sync({ force: mode });
  await LocationDescriptor.sync({ force: mode });
  await Flight.sync({ force: mode });
  await Account.sync({ force: mode });
  await Booking.sync({ force: mode });
  await Invoice.sync({ force: mode });
  await Ticket.sync({ force: mode });
  await Package.sync({ force: mode });
};

export default sync;
