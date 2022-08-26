// import sequelize from "database";
// import PackageAggregate from "../domain/Aggregates/PackageAggregate";
// import PackageDao from "../DAO/PackageDAO";
// import { Model, Sequelize } from "sequelize/types";

// interface PackageAttributes {
//   LocationCode: string;
//   FlightCode: string;
//   AccountId: number;
//   Accomodation: string;
//   AccomodationCost: string;
// }

// class PackageRepository {
//   public getPackage = async (
//     packageId: number
//   ): Promise<PackageAggregate | null> => {
//     //instantiate PackageDao
//     const packageDao = new PackageDao();
//     const packageObj: sequelize.models.Package = await packageDao.readPackage(
//       packageId
//     );

//     if (packageObj == null) return null;
//     console.log(packageObj);

//     //create Aggregate
//     const packageAggregate = new PackageAggregate(
//       // packageObj.packageId
//       packageObj.LocationCode,
//       packageObj.FlightCode,
//       packageObj.AccountId,
//       packageObj.Accomodation,
//       packageObj.AccomodationCost
//     );
//     return packageAggregate;
//   };

//   public createPackage = async (
//     locationCode: string,
//     flightCode: string,
//     accountId: number,
//     accomodation: string,
//     accomodationCost: number
//   ) => {
//     const packageDao = new PackageDao();
//     packageDao.createPackage(
//       locationCode,
//       flightCode,
//       accountId,
//       accomodation,
//       accomodationCost
//     );
//   };

//   public getAllPackages = async (
//     accountId: number
//   ): Promise<PackageAggregate | null> => {
//     const packageDao = new PackageDao();
//     const packageObjs: sequelize.models.Package = await packageDao.readAll(
//       accountId
//     );

//     return packageObjs;
//   };
// }

// export default PackageRepository;
