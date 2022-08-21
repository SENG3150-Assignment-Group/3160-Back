import PackageService from "./PackageService";
import PackageAggregate from "../../domain/Aggregates/PackageAggregate";
import PackageRepository from "../../repositories/PackageRepository";

class PackageServiceImpl implements PackageService{
    getPackage = async (id: string): Promise<PackageAggregate | null> => {
        const packageId = Number(id);

        const packageRepository = new PackageRepository();

        const travelPackage = await packageRepository.getPackage(packageId);
        return travelPackage;
    };
    
    createPackage = async(
        locationCode: string,
        flightCode: string,
        accountId: number,
        accomodation: string,
        accomodationCost: number
    ) =>{
        const packageRepository = new PackageRepository();
        packageRepository.createPackage(
            locationCode,
            flightCode,
            accountId,
            accomodation,
            accomodationCost
        )
    };

    getAllPackages = async (accountId: number): Promise<PackageAggregate | null> =>{
        const packageRepository = new PackageRepository();
        const travelPackages = await packageRepository.getAllPackages(accountId);
        return travelPackages;
    };
}

export default PackageServiceImpl;