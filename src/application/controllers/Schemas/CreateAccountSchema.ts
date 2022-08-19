import { Schema } from "express-validator";

const CreateAccountSchema: Schema = {
    accountId:{
        in: ["query"],
        errorMessage: "accountId is not a number",
        isInt: true,
        toInt: true,
    },
    creditCardDate:{
        in: ["query"],
        errorMessage: "creditCardDate is not a date",
        isDate: true,
        toDate: true,
    }
}

