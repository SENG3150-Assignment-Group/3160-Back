"use strict";

import fs from "fs";
import path from "path";
import { Sequelize, Options, DataTypes } from "sequelize";
import config from "../config/dbconfig.json";
import applyAssociations from "./associations";

const db: any = {};
const basename = path.basename(__filename);

const sequelize: Sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  <Options>config.options
);

const instantiateModels = async (sequelize: Sequelize) => {
  const files = fs.readdirSync(__dirname + "/models").filter((file: string) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  });

  // console.log(files);

  for (const file of files) {
    const modelDefiner = await import(path.join(__dirname, "/models", file));
    const model = modelDefiner.default(sequelize);
    db[model.name] = model;
  }

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
};

instantiateModels(sequelize).then(() => applyAssociations(sequelize));

export default sequelize;
