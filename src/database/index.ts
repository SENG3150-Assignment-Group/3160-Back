import { Sequelize, Options } from "sequelize";
import config from "../config/dbconfig.json";

const sequelize: Sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  <Options>config.options
);

export default sequelize;
