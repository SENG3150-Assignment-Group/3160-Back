import PackageAggregate from "../../domain/Aggregates/PackageAggregate";

interface PackageService {
    getPackage: (packageId: string) => Promise<PackageAggregate | null>
}

export default PackageService;