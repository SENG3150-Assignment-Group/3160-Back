import { Schema } from "express-validator";

const GetAccountSchema: Schema = {
    id:{
        in: ["query"],
        errorMessage: "id not a number",
        isInt: true,
        toInt: true,
  },
};
export default GetAccountSchema;