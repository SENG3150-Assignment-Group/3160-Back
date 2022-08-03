import { Schema } from "express-validator";

const GetFlightSchema: Schema = {
  id: {
    in: ["query"],
    errorMessage: "id not a number",
    isInt: true,
    toInt: true,
  },
};

export default GetFlightSchema;
