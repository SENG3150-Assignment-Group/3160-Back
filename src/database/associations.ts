import sequelize from "database";
import { Sequelize } from "sequelize";
import Location from "./models/Location";

const applyAssociations = (sequelize: Sequelize) => {
  const { Flight, Location, Distance, Airline, PlaneType } = sequelize.models;

  // many locations have distances between many other locations
  Location.belongsToMany(Location, {
    through: Distance,
    as: "location1",
    foreignKey: "LocationId1",
  });
  Location.belongsToMany(Location, {
    through: Distance,
    as: "location2",
    foreignKey: "LocationId2",
  });

  // Locations have many departing flights
  Location.hasMany(Flight, {
    as: "DepartingFlights",
    foreignKey: "DepartureId",
  });
  Flight.belongsTo(Location, { as: "Departure", foreignKey: "DepartureId" });

  // locations have many arriving flights
  Location.hasMany(Flight, {
    as: "ArrivingFlights",
    foreignKey: "DestinationId",
  });
  Flight.belongsTo(Location, {
    as: "Destination",
    foreignKey: "DestinationId",
  });

  // locations have many stopOverFlights
  Location.hasMany(Flight, {
    as: "StopOverFlights",
    foreignKey: "StopOverId",
  });
  Flight.belongsTo(Location, {
    as: "StopOver",
    foreignKey: "StopOverId",
  });

  //Airlines schedule many flights
  Airline.hasMany(Flight, {
    as: "ScheduledFlights",
    foreignKey: "AirlineCode",
  });
  Flight.belongsTo(Airline, {
    as: "Airline",
    foreignKey: "AirlineCode",
  });

  //Planes conduct many flights
  PlaneType.hasMany(Flight, {
    as: "ConductedFlights",
    foreignKey: "PlaneCode",
  });
  Flight.belongsTo(PlaneType, {
    as: "Plane",
    foreignKey: "PlaneCode",
  });
};

export default applyAssociations;
