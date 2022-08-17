'use strict';

import {
  Model, UUIDV4
} from 'sequelize';

//TODO class is named Distance in domain and class diagram but Distances in database
interface DistancesAttributes {
    LocationId1: number;
    LocationId2: number;
    DistanceInKms: number;     
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Distances extends Model<DistancesAttributes> 
  implements DistancesAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     LocationId1!: number;
    LocationId2!: number;
    DistanceInKms!: number;
    static associate(models: any) {
      // define association here
   
    }
  };
  Distances.init({
    LocationId1: {
      type: DataTypes.INTEGER,      
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    LocationId2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true      
    },
    DistanceInKms: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'Distances',
  });
  return Distances;
};