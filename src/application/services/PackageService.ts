import PackageAggregate from "../../domain/Aggregates/PackageAggregate";

interface PackageService {
    getPackage: (packageId: string) => Promise<PackageAggregate | null>
    createPackage(
        locationCode: string,
        flightCode: string,
        accountId: number,
        accomodation: string,
        accomodationCost: number
    ):void;
    getAllPackages: (accountId: number) => Promise<PackageAggregate | null>
}

export default PackageService;