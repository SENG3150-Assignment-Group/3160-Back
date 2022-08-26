import App from "./App";
import sequelize from "./database/";
import sync from "./database/sync";

import FlightController from "./application/controllers/FlightController";
import ExploreController from "./application/controllers/ExploreController";
import BookingController from "./application/controllers/BookingController";
import AccountController from "./application/controllers/AccountController";
import PackageController from "./application/controllers/PackageController";

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
  const app = new App(
    [
      new FlightController(),
      new ExploreController(),
      new BookingController(),
      new AccountController(),
      new PackageController(),
    ],
    3000
  );

  app.listen();
};

init();
