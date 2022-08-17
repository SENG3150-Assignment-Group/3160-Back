import { Sequelize, Options } from "sequelize";
import dbconfig from "../dbconfig.json";

import FlightModel from "./infrastructure/ORMs/FlightModel";

/*
* format to follow
  {
    "database": "",
    "username": "",
    "password": "",
    "options": {
      "host": "localhost",
      "dialect": "mysql",
      "pool": {
        "max": 5,
        "min": 0,
        "acquire": 30000,
        "idle": 10000
      }
    }
  }
*/

const sequelize: Sequelize = new Sequelize(
  dbconfig.database,
  dbconfig.username,
  dbconfig.password,
  <Options>dbconfig.options
);

const models = [FlightModel];

// We define all models according to their files.
for (const modelFunc of models) {
  modelFunc(sequelize);
}

// We export the sequelize connection instance to be used around our app.
export default sequelize;
