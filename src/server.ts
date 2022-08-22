import App from "./App";
import sequelize from "./database/";

import FlightController from "./application/controllers/FlightController";
import ExploreController from "./application/controllers/ExploreController";

const assertDatabaseConnectionOk = async () => {
  console.log(`Checking database connection...`);
  try {
    await sequelize.authenticate();
    console.log("Database connection OK!");
    console.log(sequelize);
    await sequelize.sync({ force: true });
    // console.log("Database in sync!");
  } catch (error: unknown) {
    console.log("Unable to connect to the database:");
    console.log(error);
    process.exit(1);
  }
};

const init = async () => {
  await assertDatabaseConnectionOk();
  const app = new App([new FlightController()], 3000);

  app.listen();
};

init();
