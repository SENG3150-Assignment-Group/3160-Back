import PackageService from "./PackageService";
import PackageDAO from "../../DAO/PackageDAO";
import Package from "../../domain/Package";

class PackageServiceImpl implements PackageService {
  public getPackage = async (packageId: number): Promise<Package | null> => {
    const packageDAO = new PackageDAO();
    const packageModel = await packageDAO.read(packageId);

    return packageModel == null ? null : Package.modelToDomain(packageModel);
  };

  public createPackage = async (
    locationCode: string,
    flightId: number,
    accountId: number,
    accomodation: string,
    accomodationCost: number
  ): Promise<Package | null> => {
    const packageDAO = new PackageDAO();
    const packageModel = await packageDAO.create(
      locationCode,
      flightId,
      accountId,
      accomodation,
      accomodationCost
    );

    return packageModel == null ? null : Package.modelToDomain(packageModel);
  };

  public getAllPackages = async (accountId: number): Promise<Package[]> => {
    const packageDAO = new PackageDAO();
    const packageModels = await packageDAO.readAccountsPackages(accountId);

    return packageModels.map((model) => Package.modelToDomain(model));
  };
}

export default PackageServiceImpl;
