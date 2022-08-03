import express from "express";
import "dotenv/config";
import cors from "cors";
import Controller from "application/controllers/Controller";

class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: Controller[], port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.setProperties();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private setProperties() {
    this.app.set("json spaces", 2);
  }

  private initializeControllers(controllers: Controller[]) {
    for (const controller of controllers) {
      this.app.use("/api", controller.router);
    }
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
