import { ModelStatic, Model, Op, QueryTypes } from "sequelize";
import sequelize from "../database/";

interface DescriptorAttributes {
  DescriptorId: number;
  CategoryId: number;
  Name: string;
}

class DescriptorDAO {
  private model: ModelStatic<Model<DescriptorAttributes>>;

  constructor() {
    this.model = sequelize.models.Descriptor;
  }

  readDescriptorsForLocation = (
    locationId: number
  ): Promise<Model<DescriptorAttributes>[]> => {
    /*
      SELECT * FROM Descriptor
      WHERE Descriptor.descriptorId IN
      (
        SELECT descriptorId FROM LocationDescriptor
        WHERE LocationDescriptor.locationId = 'suppliedID'
      ) 
   */
    return this.model.findAll({
      where: {
        DescriptorId: {
          [Op.in]: sequelize.literal(
            `(SELECT descriptorId FROM LocationDescriptors WHERE LocationDescriptors.LocationId = ${locationId})`
          ),
        },
      },
    });
  };
}

export default DescriptorDAO;
