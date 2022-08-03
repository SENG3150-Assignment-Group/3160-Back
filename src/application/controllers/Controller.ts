import express from "express";

abstract class Controller {
  public abstract path: string;
  public abstract router: express.Router;

  public abstract initializeRoutes: () => void;
}

export default Controller;
