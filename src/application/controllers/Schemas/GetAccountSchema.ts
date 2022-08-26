import { Schema } from "express-validator";

const GetAccountSchema: Schema = {
  accountId: {
    in: ["query"],
    errorMessage: "accountId not a number",
    isInt: true,
    toInt: true,
  },
};
export default GetAccountSchema;
