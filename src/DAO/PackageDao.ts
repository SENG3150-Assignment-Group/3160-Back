import { ModelStatic, Model } from "sequelize";
import sequelize from "../database/";

interface PackageAttributes {
    LocationCode: string;
    FlightCode: string;
    AccountId: number;
    Accomodation: string;
    AccomodationCost: number;
}

class PackageDao {
    private model: ModelStatic<Model<PackageAttributes>>;

    constructor() {
        this.model = sequelize.models.Package;
    }

    public readPackage = async (
        id: number
    ): Promise<Model<PackageAttributes> | null> => {
        return await this.model.findByPk(id);
    };


}

export default PackageDao;