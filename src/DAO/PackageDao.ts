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

    public readAll = async (accountId: number) => {
        return await this.model.findAll({
            where: {
                AccountId: accountId
            }
        });
      };

    public readPackage = async (
        id: number
    ): Promise<Model<PackageAttributes> | null> => {
        return await this.model.findByPk(id);
    };

    public createPackage = async(
        locationCode: string,
        flightCode: string,
        accountId: number,
        accomodation: string,
        accomodationCost: number
    )=>{
        await this.model.create({
            LocationCode: locationCode,
            FlightCode: flightCode,
            AccountId: accountId,
            Accomodation: accomodation,
            AccomodationCost: accomodationCost
        });
    };

}

export default PackageDao;