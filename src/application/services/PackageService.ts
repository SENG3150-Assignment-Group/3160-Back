import Package from "../../domain/Package";

interface PackageService {
  getPackage: (packageId: number) => Promise<Package | null>;
  createPackage(
    locationCode: string,
    flightId: number,
    accountId: number,
    accomodation: string,
    accomodationCost: number
  ): Promise<Package | null>;
  getAllPackages: (accountId: number) => Promise<Package[]>;
}

export default PackageService;
