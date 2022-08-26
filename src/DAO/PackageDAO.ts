import { Package, PackageOutput } from "../database/models/Package";

class PackageDAO {
  private model: typeof Package;

  constructor() {
    this.model = Package;
  }

  public readAccountsPackages = async (
    accountId: number
  ): Promise<PackageOutput[]> => {
    return await this.model.findAll({
      where: {
        AccountId: accountId,
      },
    });
  };

  public read = async (id: number): Promise<PackageOutput | null> => {
    return await this.model.findByPk(id);
  };

  public create = async (
    locationCode: string,
    flightId: number,
    accountId: number,
    accomodation: string,
    accomodationCost: number
  ): Promise<PackageOutput | null> => {
    try {
      return await this.model.create({
        LocationCode: locationCode,
        FlightId: flightId,
        AccountId: accountId,
        Accomodation: accomodation,
        AccomodationCost: accomodationCost,
      });
    } catch (error: any) {
      return null;
    }
  };
}

export default PackageDAO;
