import sequelize from "../";
import {
  DataTypes,
  Model,
  InferCreationAttributes,
  InferAttributes,
  ForeignKey,
  CreationOptional,
} from "sequelize";
import { Location } from "./Location";
import { Flight } from "./Flight";
import { Account } from "./Account";

interface PackageInput extends InferCreationAttributes<Package> {}
interface PackageOutput extends InferAttributes<Package> {}

class Package extends Model<PackageOutput, PackageInput> {
  PackageId!: CreationOptional<number>;
  LocationCode!: ForeignKey<string>;
  FlightId!: ForeignKey<number>;
  AccountId!: ForeignKey<number>;
  Accomodation!: string;
  AccomodationCost!: number;
}
Package.init(
  {
    PackageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Accomodation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    AccomodationCost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    timestamps: false,
    modelName: "Package",
  }
);

// a Package is made for a travel Location
Package.belongsTo(Location, {
  as: "Location",
  foreignKey: {
    name: "LocationCode",
    allowNull: false,
  },
  targetKey: "LocationCode",
});

// a Location can be part of many Packages
Location.hasMany(Package, {
  as: "Packages",
  foreignKey: {
    name: "LocationCode",
    allowNull: false,
  },
});

// a Package includes a flight
Package.belongsTo(Flight, {
  as: "Flight",
  foreignKey: {
    name: "FlightId",
    allowNull: false,
  },
});

// A Flight can be part of many packages
Flight.hasMany(Package, {
  as: "Packages",
  foreignKey: {
    name: "FlightId",
    allowNull: false,
  },
});

// A Package is made for an Account
Package.belongsTo(Account, {
  as: "Account",
  foreignKey: {
    name: "AccountId",
    allowNull: false,
  },
});

// An account can have many Packages
Account.hasMany(Package, {
  as: "Packages",
  foreignKey: {
    name: "AccountId",
    allowNull: false,
  },
});

export { PackageInput, PackageOutput, Package };
