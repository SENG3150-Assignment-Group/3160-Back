import { Sequelize, Options } from "sequelize";
import config from "../config/dbconfig.json";

const sequelize: Sequelize = new Sequelize(
  config.dep.database,
  config.dep.username,
  config.dep.password,
  <Options>config.dep.options
);

export default sequelize;
