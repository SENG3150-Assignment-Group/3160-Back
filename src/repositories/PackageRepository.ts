import sequelize from "database";
import PackageAggregate from "../domain/Aggregates/PackageAggregate";
import PackageDao from "../DAO/PackageDao";

interface PackageAttributes {
    LocationCode: string;
    FlightCode: string;
    AccountId: number;
    Accomodation: string;
    AccomodationCost: string;
}

class PackageRepository {
    public getPackage = async (
        packageId: number
    ): Promise<PackageAggregate | null> =>{
        //instantiate PackageDao
        const packageDao = new PackageDao();
        const packageObj: sequelize.models.Package = await packageDao.readPackage(
            packageId
        );

        if (packageObj == null) return null;
        console.log(packageObj);

        //create Aggregate
        const packageAggregate = new PackageAggregate(
            // packageObj.packageId
            packageObj.LocationCode,
            packageObj.FlightCode,
            packageObj.AccountId,
            packageObj.Accomodation,
            packageObj.AccomodationCost
        );
            return packageAggregate;
    };
    
}

export default PackageRepository;