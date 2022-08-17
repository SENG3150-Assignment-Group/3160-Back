import App from "./App";
import sequelize from "./sequelize_setup";

import FlightController from "./application/controllers/FlightController";
import FlightDAO from "./infrastructure/DAOs/FlightDAO";

const assertDatabaseConnectionOk = async () => {
  console.log(`Checking database connection...`);
  try {
    await sequelize.authenticate();
    console.log("Database connection OK!");
    const flightDAO: FlightDAO = new FlightDAO();
    console.log(await flightDAO.readAll());
  } catch (error: unknown) {
    console.log("Unable to connect to the database:");
    console.log(error);
    process.exit(1);
  }
};

const init = async () => {
  await assertDatabaseConnectionOk();

  const app = new App([new FlightController()], 8080);

  app.listen();
};

init();
