import App from "./App";
import sequelize from "./database/";

import FlightController from "./application/controllers/FlightController";

const assertDatabaseConnectionOk = async () => {
  console.log(`Checking database connection...`);
  try {
    await sequelize.authenticate();
    console.log("Database connection OK!");
    await sequelize.sync({ force: true });
    console.log("Database in sync!");
  } catch (error: unknown) {
    console.log("Unable to connect to the database:");
    console.log(error);
    process.exit(1);
  }
};

const init = async () => {
  await assertDatabaseConnectionOk();
  const app = new App([new FlightController()], 3306);

  app.listen();
};

init();
