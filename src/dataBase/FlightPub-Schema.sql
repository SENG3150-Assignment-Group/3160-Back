DROP SCHEMA FlightPub;
CREATE SCHEMA FlightPub;
USE FlightPub;

CREATE TABLE `Country` (
  `CountryCode2` char(2) NOT NULL,
  `CountryCode3` char(3) NOT NULL,
  `CountryName` varchar(80) NOT NULL DEFAULT '',
  `AlternateName1` varchar(80) NOT NULL DEFAULT '',
  `AlternateName2` varchar(80) NOT NULL DEFAULT '',
  `MotherCountryCode3` char(3) NOT NULL DEFAULT '',
  `MotherCountryComment` varchar(80) NOT NULL DEFAULT '',
  PRIMARY KEY (`CountryCode3`)
);

CREATE TABLE `Airline`(
  `AirlineCode` char(2) NOT NULL,
  `AirlineName` varchar(30) NOT NULL,
  `CountryCode3` char(3) NOT NULL,
  `Sponsored` boolean NOT NULL DEFAULT FALSE,
  PRIMARY KEY (`AirlineCode`, `CountryCode3`),
  KEY `AirlinesCountryCode3_FK` (`CountryCode3`),
  CONSTRAINT `AirlinesCountryCode3_FK` FOREIGN KEY (`CountryCode3`) REFERENCES `Country` (`CountryCode3`)
);

CREATE TABLE `PlaneType` (
  `PlaneCode` varchar(20) NOT NULL,
  `Type` varchar(50) NOT NULL,
  `NumFirstClass` int(11) NOT NULL,
  `NumBusiness` int(11) NOT NULL,
  `NumPremiumEconomy` int(11) NOT NULL,
  `NumEconomy` int(11) NOT NULL,
  PRIMARY KEY (`PlaneCode`)
);

CREATE TABLE `Location` (
  `LocationName` char(30) NOT NULL,
  `LocationCode` char(3) NOT NULL,
  `LocationId` int(6) UNIQUE NOT NULL,
  `Airport` varchar(30) NOT NULL,
  `Restricted` boolean NOT NULL,
  `CountryCode3` char(3) NOT NULL,
  `RestricationStart` datetime NOT NULL,
  `RestricationEnd` datetime NOT NULL,
  PRIMARY KEY (`LocationCode`, `LocationId`, `CountryCode3`),
  KEY `LocationCountryCode_FK` (`CountryCode3`),
  CONSTRAINT `LocationCountryCode_FK` FOREIGN KEY (`CountryCode3`) REFERENCES `Country` (`CountryCode3`)
);

CREATE TABLE `Account` (
  `AccountId` int(6) NOT NULL,
  `FirstName` varchar(30) NOT NULL,
  `LastName` varchar(30) NOT NULL,
  `Email` nvarchar(255) NOT NULL,
  `Password` varchar(35) NOT NULL,
  PRIMARY KEY (`AccountId`)
);

CREATE TABLE `Ticket` (
  `TicketCode` char(1) NOT NULL,
  `TicketClass` char(3) NOT NULL,
  `Price` decimal(10,2) NOT NULL,
  `Booked` boolean NOT NULL DEFAULT FALSE,
  `Transferable` boolean NOT NULL DEFAULT FALSE,
  `Exchangable` boolean NOT NULL DEFAULT FALSE,
  `Refundable` boolean NOT NULL DEFAULT FALSE,
  `AccountId` int(6) NOT NULL,
  `PersonType` char(30) NOT NULL,
  `SpecialRequests` varchar(256) NOT NULL,
  `DietaryPreferences` varchar(256) NOT NULL,
  `CarryOnBaggage` boolean NOT NULL DEFAULT FALSE,
  `CheckedBaggage` boolean NOT NULL DEFAULT FALSE,
  PRIMARY KEY (`TicketCode`, `TicketClass`, `AccountId`),
  KEY `TicketAccountId_FK` (`AccountId`),
  CONSTRAINT `TicketAccountId_FK` FOREIGN KEY (`AccountId`) REFERENCES `Account` (`AccountId`)
);

CREATE TABLE `Distances` (
  `LocationId1` int(6) UNIQUE NOT NULL,
  `LocationId2` int(6) UNIQUE NOT NULL,
  `DistanceInKM` int(11) NOT NULL,
  PRIMARY KEY (`LocationId1`, `LocationId2`),
  KEY `DistancesLocationId1_FK` (`LocationId1`),
  KEY `DistancesLocationId2_FK` (`LocationId2`),
  CONSTRAINT `DistancesLocationId1_FK` FOREIGN KEY (`LocationId1`) REFERENCES `Location` (`LocationId`),
  CONSTRAINT `DistancesLocationId2_FK` FOREIGN KEY (`LocationId2`) REFERENCES `Location` (`LocationId`)
);

CREATE TABLE `Flight` (
  `FlightCode` varchar(6) NOT NULL,
  `DepartureCode` char(3) NOT NULL,
  `DepartureId` int(6) UNIQUE NOT NULL,
  `DestinationCode` char(3) NOT NULL,
  `DestinationId` int(6) UNIQUE NOT NULL,
  `DepartureDateTime` datetime NOT NULL,
  `DestinationDateTime` datetime NOT NULL,
  `StopOverCode` char(3) DEFAULT NULL,
  `StopOverId` int(6) UNIQUE DEFAULT NULL,
  `AirlineCode` char(2) NOT NULL,
  `PlaneCode` varchar(20) NOT NULL,
  `Duration` time NOT NULL,
  `NumSeats` int(3) NOT NULL,
  PRIMARY KEY (`FlightCode`, `DepartureDateTime`, `AirlineCode`),
  KEY `FlightDepartureCode_FK` (`DepartureCode`),
  KEY `FlightDestinationCode_FK` (`DestinationCode`),
  KEY `FlightStopOverCode_FK` (`StopOverCode`),
  KEY `FlightAirlineCode_FK` (`AirlineCode`),
  KEY `FlightPlaneCode_FK` (`PlaneCode`),
  CONSTRAINT `FlightDepartureCode_FK` FOREIGN KEY (`DepartureCode`) REFERENCES `Location` (`LocationCode`),
  CONSTRAINT `FlightDestinationCode_FK` FOREIGN KEY (`DestinationCode`) REFERENCES `Location` (`LocationCode`),
  CONSTRAINT `FlightStopOverCode_FK` FOREIGN KEY (`StopOverCode`) REFERENCES `Location` (`LocationCode`),
  CONSTRAINT `FlightPlaneCode_FK` FOREIGN KEY (`PlaneCode`) REFERENCES `PlaneType` (`PlaneCode`),
  CONSTRAINT `FlightAirlineCode_FK` FOREIGN KEY (`AirlineCode`) REFERENCES `Airline` (`AirlineCode`)
);

CREATE TABLE `WatchListedFlight` (
  `AccountId` int(6) NOT NULL,
  `FlightCode` varchar(6) NOT NULL,
  PRIMARY KEY (`AccountId`, `FlightCode`),
  KEY `WatchListedFlightAccountId_FK` (`AccountId`),
  KEY `WatchListedFlightFlightCode_FK` (`FlightCode`),
  CONSTRAINT `WatchListedFlightAccountId_FK` FOREIGN KEY (`AccountId`) REFERENCES `Account` (`AccountId`),
  CONSTRAINT `WatchListedFlightFlightCode_FK` FOREIGN KEY (`FlightCode`) REFERENCES `Flight` (`FlightCode`)
);

CREATE TABLE `WishListedLocation` (
  `AccountId` int(6) NOT NULL,
  `LocationId` int(6) UNIQUE NOT NULL,
  `DateAdded` date NOT NULL,
  PRIMARY KEY (`AccountId`, `LocationId`, `DateAdded`),
  KEY `WishListedLocationAcountId_FK` (`AccountId`),
  KEY `WishListedLocationLocationId_FK` (`LocationId`),
  CONSTRAINT `WishListedLocationAcountId_FK` FOREIGN KEY (`AccountId`) REFERENCES `Account` (`AccountId`),
  CONSTRAINT `WishListedLocationLocationId_FK` FOREIGN KEY (`LocationId`) REFERENCES `Location` (`LocationId`)
);

CREATE TABLE `FlightPreference` (
  `PreferenceId` int(6) UNIQUE NOT NULL,
  `PreferenceName` varchar(30) NOT NULL,
  `AccountId` int(6) NOT NULL,
  `SeatClass` char(3) NOT NULL,
  `Airline` varchar(30) NOT NULL,
  `PriceMax` int(6) NOT NULL,
  `DepartureTime` datetime NOT NULL,
  `ArivalTime` datetime NOT NULL,
  `NumberOfStops` int(2) NOT NULL,
  `CarryOnBaggagePreference` boolean DEFAULT FALSE,
  `CheckedBaggagePreference` boolean DEFAULT FALSE,
  PRIMARY KEY (`PreferenceId`, `AccountId`),
  KEY `FlightPreferenceAccountId_FK` (`AccountId`),
  CONSTRAINT `FlightPreferenceAccountId_FK` FOREIGN KEY (`AccountId`) REFERENCES `Account` (`AccountId`)
);

CREATE TABLE `DestinationPreference` (
  `PreferenceId` int(6) UNIQUE NOT NULL,
  `PreferenceName` varchar(30) NOT NULL,
  `AccountId` int(6) NOT NULL,
  `Weather` varchar(30) DEFAULT NULL,
  `Environment` varchar(30) DEFAULT NULL,
  `InterestAreas` varchar(30) DEFAULT NULL,
  `Budget` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`PreferenceId`, `AccountId`),
  KEY `DestinationPreferenceAccountId_FK` (`AccountId`),
  CONSTRAINT `DestinationPreferenceAccountId_FK` FOREIGN KEY (`AccountId`) REFERENCES `Account` (`AccountId`)
);

CREATE TABLE `Descriptor` (
  `DescriptorId` int(6) NOT NULL,
  `CategoryId` int(6) NOT NULL,
  `Name` varchar(30) NOT NULL,
  PRIMARY KEY (`DescriptorId`)
);

CREATE TABLE `LocationDescriptor` (
`DescriptorId` int(6) NOT NULL,
`LocationId` int(6) NOT NULL,
PRIMARY KEY (`DescriptorId`, `LocationId`),
KEY `LocationDescriptorDescriptorId_FK` (`DescriptorId`),
KEY `LocationDescriptorLocationId_FK` (`LocationId`),
CONSTRAINT `LocationDescriptorDescriptorId_FK` FOREIGN KEY (`DescriptorId`) REFERENCES `Descriptor` (`DescriptorId`),
CONSTRAINT `LocationDescriptorLocationId_FK` FOREIGN KEY (`LocationId`) REFERENCES `Location` (`LocationId`)
);

CREATE TABLE `Booking` (
`BookingId` int(6) UNIQUE NOT NULL,
`AccountId` int(6) NOT NULL,
`Email` nvarchar(255) NOT NULL,
`DateCreated` datetime NOT NULL,
`State` int(1) DEFAULT '1',
PRIMARY KEY (`BookingId`, `AccountId`),
KEY `BookingAccountId_FK` (`AccountId`),
CONSTRAINT `BookingAccountId_FK` FOREIGN KEY (`AccountId`) REFERENCES `Account` (`AccountId`)
);

CREATE TABLE `Invoice` (
`TransactionId` int(6) UNIQUE NOT NULL,
`Date` date NOT NULL,
`CreditCardNumber` varchar(16) NOT NULL,
`Subtotal` decimal(10,2) NOT NULL,
`Tax` decimal(10,2) NOT NULL,
`RefundAmount` decimal(10,2) DEFAULT NULL,
PRIMARY KEY (`TransactionId`, `Date`)
);

CREATE TABLE `Packages`(
  `PackageId` int(6) UNIQUE NOT NULL,
  `LocationCode` char(3) NOT NULL,
  `AccountId` int(6) NOT NULL,
  `Accomodation` char(30) NOT NULL,
  `AccomodationCost` decimal(10,2) NOT NULL,
  `FlightCodeList` varchar(55) DEFAULT NULL,
  PRIMARY KEY (`PackageId`, `AccountId`),
  KEY `PackagesLocationCode_FK` (`LocationCode`),
  KEY `PackagesAccountId_FK` (`AccountId`),
  CONSTRAINT `PackagesLocationCode_FK` FOREIGN KEY (`LocationCode`) REFERENCES `Location` (`LocationCode`),
  CONSTRAINT `PackagesAccountId_FK` FOREIGN KEY (`AccountId`) REFERENCES `Account` (`AccountId`)
);

CREATE TABLE `PackageDescription` ( 
  `DescriptorId` int(6) NOT NULL,
  `PackageId` int(6) UNIQUE NOT NULL,
  PRIMARY KEY (`DescriptorId`, `PackageId`),
  KEY `PackageDescriptionDescriptorId_FK` (`DescriptorId`),
  KEY `PackageDescriptionPackageId_FK` (`PackageId`),
  CONSTRAINT `PackageDescriptionDescriptorId_FK` FOREIGN KEY (`DescriptorId`) REFERENCES `Descriptor` (`DescriptorId`),
  CONSTRAINT `PackageDescriptionPackageId_FK` FOREIGN KEY (`PackageId`) REFERENCES `Packages` (`PackageId`)
);