import App from "./App";

import FlightController from "./application/controllers/FlightController";

const app = new App([new FlightController()], 8080);

app.listen();
