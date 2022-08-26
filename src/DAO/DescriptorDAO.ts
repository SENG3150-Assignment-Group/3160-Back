import { Op } from "sequelize";
import { Descriptor, DescriptorOutput } from "../database/models/Descriptor";
import sequelize from "../database/";

class DescriptorDAO {
  private model: typeof Descriptor;

  constructor() {
    this.model = Descriptor;
  }

  readDescriptorsForLocation = (
    locationId: number
  ): Promise<DescriptorOutput[]> => {
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
