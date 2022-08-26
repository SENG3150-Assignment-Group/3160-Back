import sequelize from "../";
import {
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { Location } from "./Location";
import { Descriptor } from "./Descriptor";

interface LocationDescriptorAttributes {
  DescriptorId: number;
  LocationId: number;
}

interface LocationDescriptorInput
  extends InferCreationAttributes<LocationDescriptor> {}
interface LocationDescriptorOutput
  extends InferAttributes<LocationDescriptor> {}

class LocationDescriptor extends Model<
  LocationDescriptorOutput,
  LocationDescriptorInput
> {
  DescriptorId!: ForeignKey<number>;
  LocationId!: ForeignKey<number>;
}
LocationDescriptor.init(
  {},
  {
    sequelize: sequelize,
    timestamps: false,
    modelName: "LocationDescriptor",
  }
);

// A location can have many descriptors
Location.belongsToMany(Descriptor, {
  through: LocationDescriptor,
  foreignKey: {
    name: "LocationId",
    allowNull: false,
  },
});

// The same descriptor exists on many locations
Descriptor.belongsToMany(Location, {
  through: LocationDescriptor,
  foreignKey: {
    name: "DescriptorId",
    allowNull: false,
  },
});

export {
  LocationDescriptorInput,
  LocationDescriptorOutput,
  LocationDescriptor,
};
