import { Schema } from "express-validator";

const GetPackageSchema: Schema = {
  packageId: {
    in: ["query"],
    errorMessage: "packageId not a number",
    isInt: true,
    toInt: true,
  },
};

export default GetPackageSchema;
