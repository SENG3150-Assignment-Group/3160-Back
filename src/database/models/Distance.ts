import sequelize from "../";
import {
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { Location } from "./Location";

interface DistanceAttributes {
  LocationId1: number;
  LocationId2: number;
  DistanceInKms: number;
}

interface DistanceInput extends InferCreationAttributes<Distance> {}
interface DistanceOutput extends InferAttributes<Distance> {}

class Distance
  extends Model<DistanceOutput, DistanceInput>
  implements DistanceAttributes
{
  LocationId1!: ForeignKey<number>;
  LocationId2!: ForeignKey<number>;
  DistanceInKms!: number;
}

Distance.init(
  {
    DistanceInKms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    timestamps: false,
    modelName: "Distance",
  }
);

Location.belongsToMany(Location, {
  through: Distance,
  as: "location1",
  foreignKey: "LocationId1",
});
Location.belongsToMany(Location, {
  through: Distance,
  as: "location2",
  foreignKey: "LocationId2",
});

export { DistanceInput, DistanceOutput, Distance };
