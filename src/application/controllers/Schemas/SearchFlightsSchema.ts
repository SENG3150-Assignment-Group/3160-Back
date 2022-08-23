import { Schema } from "express-validator";

const SearchFlightsSchema: Schema = {
  departure: {
    in: ["query"],
    errorMessage: "departure is not a number",
    isInt: true,
    toInt: true,
  },
  destination: {
    in: ["query"],
    errorMessage: "destination is not a number",
    isInt: true,
    toInt: true,
  },
  startDate: {
    in: ["query"],
    errorMessage: "startDate is not a date",
    isDate: true,
    toDate: true,
  },
  endDate: {
    in: ["query"],
    errorMessage: "endDate is not a date",
    isDate: true,
    toDate: true,
    optional: true,
  },
  isOneWay: {
    in: ["query"],
    errorMessage: "returnTrip is not a boolean",
    isBoolean: true,
    toBoolean: true,
  },
  seats: {
    in: ["query"],
    errorMessage: "seat is not a number",
    isInt: true,
    toInt: true,
  },
};

export default SearchFlightsSchema;
