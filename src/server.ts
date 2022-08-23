import App from "./App";
import sequelize from "./database/";
import sync from "./database/sync";

import FlightController from "./application/controllers/FlightController";
import ExploreController from "./application/controllers/ExploreController";

const assertDatabaseConnectionOk = async () => {
  console.log(`Checking database connection...`);
  try {
    await sequelize.authenticate();
    console.log("Database connection OK!");
  } catch (error: unknown) {
    console.log("Unable to connect to the database:");
    console.log(error);
    process.exit(1);
  }
};

const init = async () => {
  await assertDatabaseConnectionOk();
  await sync();
  const app = new App([new FlightController()], 3000);

  app.listen();
};

init();
