import PackageService from "./PackageService";
import PackageAggregate from "../../domain/Aggregates/PackageAggregate";

class PackageServiceImpl implements PackageService{
    public getPackage = async (id: string): Promise<PackageAggregate | null> => {
        const packageId = Number(id);

        const packageRepository = new PackageRepository();

        const package = await packageRepository.getpackage(packageId);
        return package;
    };
    // public createPackage{

    // };
}

export default PackageServiceImpl;