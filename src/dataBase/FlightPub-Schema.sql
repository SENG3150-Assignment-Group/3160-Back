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
  `LocationId` int(6) NOT NULL,
  `LocationName` char(30) NOT NULL,
  `LocationCode` char(3) NOT NULL,
  `Airport` varchar(30) NOT NULL,
  `Restricted` boolean NOT NULL,
  `CountryCode3` char(3) NOT NULL,
  `RestricationStart` datetime NOT NULL,
  `RestricationEnd` datetime NOT NULL,
  PRIMARY KEY (`LocationCode`, `CountryCode3`, `LocationId`),
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
  `AccountId` int (6) NOT NULL,
  `PersonType` char(30) NOT NULL,
  `SpecialRequests` varchar(256) NOT NULL,
  `DietaryPreferences` varchar(256) NOT NULL,
  `CarryOnBaggage` boolean NOT NULL DEFAULT FALSE,
  `CheckedBaggage` boolean NOT NULL DEFAULT FALSE,
  PRIMARY KEY (`TicketCode`, `TicketClass`, `AccountId`),
  KEY `TicketAccountId_FK` (`AccountId`),
  CONSTRAINT `TicketAccountId_FK` FOREIGN KEY (`AcountId`) REFERENCES `Account` (`AccountId`)
);

CREATE TABLE `Distances` (
  `LocationId1` int(6) NOT NULL,
  `LocationId2` int(6) NOT NULL,
  `DistanceInKM` int(11) NOT NULL,
  PRIMARY KEY (`LocationId1`, `LocationId2`, `DistanceInKM`),
  KEY `DistancesLocationId1_KM` (`LocationId`),
  KEY `DistancesLocationId2_KM` (`LocationId`),
  CONSTRAINT `DistancesLocationId1_KM` FOREIGN KEY (`LocationId`) REFERENCES `Location` (`LocationId`),
  CONSTRAINT `DistancesLocationId2_KM` FOREIGN KEY (`LocationId`) REFERENCES `Location` (`LocationId`)
);

CREATE TABLE `Flight` (
  `FlightCode` varchar(6) NOT NULL,
  `DepartureCode` char(3) NOT NULL,
  `DepartureId` int(6) NOT NULL,
  `DestinationCode` char(3) NOT NULL,
  `DestinationId` int(6) NOT NULL,
  `DepartureDateTime` datetime NOT NULL,
  `DestinationDateTime` datetime NOT NULL,
  `StopOverCode` char(3) DEFAULT NULL,
  `StopOverId` int(6) DEFAULT NULL,
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
  `LocationId` int(6) NOT NULL,
  `DateAdded` date NOT NULL,
  PRIMARY KEY (`AccountId`, `LocationId`, `DateAdded`),
  KEY `WishListedLocationAcountId_FK` (`AccountId`),
  KEY `WishListedLocationLocationId_FK` (`LocationId`),
  CONSTRAINT `WishListedLocationAcountId_FK` FOREIGN KEY (`AccountId`) REFERENCES `Account` (`AccountId`),
  CONSTRAINT `WishListedLocationLocationId_FK` FOREIGN KEY (`LocationId`) REFERENCES `Locations` (`LocationId`)
);

CREATE TABLE `DestinationPreference` (
  `PreferenceId` int(6) NOT NULL,
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
  PRIMARY KEY (`PreferenceId`, `PreferenceName`, `AccountId`),
  KEY `DestinationPreferenceAccountId_FK` (`AccountId`),
  KEY `DestinationPreferenceSeatClass_FK` (`SeatClass`),
  KEY `DestinationPreferenceAirline_FK` (`Airline`),
  CONSTRAINT `DestinationPreferenceAccountId_FK` FOREIGN KEY (`AccountId`) REFERENCES `Account` (`AccountId`),
  CONSTRAINT `DestinationPreferenceSeatClass_FK` FOREIGN KEY (`SeatClass`) REFERENCES `TicketType` (`TicketClass`),
  CONSTRAINT `DestinationPreferenceAirline_FK` FOREIGN KEY (`Airline`) REFERENCES `Airline` (`AirlineName`)
);

CREATE TABLE `FlightPreference` (
   CONSTRAINT `` FOREIGN KEY (``) REFERENCES `` (``),
);

CREATE TABLE `Descriptor` (
  CONSTRAINT `` FOREIGN KEY (``) REFERENCES `` (``),
);

CREATE TABLE `LocationDescriptor` (
  CONSTRAINT `` FOREIGN KEY (``) REFERENCES `` (``),
);

CREATE TABLE `Booking` (
  CONSTRAINT `` FOREIGN KEY (``) REFERENCES `` (``),
);

CREATE TABLE `Payment` (
  CONSTRAINT `` FOREIGN KEY (``) REFERENCES `` (``),
);

CREATE TABLE `PackageDescription` ( 
  CONSTRAINT `` FOREIGN KEY (``) REFERENCES `` (``),
);

CREATE TABLE `Invoice` (
  CONSTRAINT `` FOREIGN KEY (``) REFERENCES `` (``),
);

CREATE TABLE `Packages`(
  CONSTRAINT `` FOREIGN KEY (``) REFERENCES `` (``),
);

CREATE TABLE `HolidayPackage` (
  CONSTRAINT `` FOREIGN KEY (``) REFERENCES `` (``),
);

CREATE TABLE `TravelPackage` (
  CONSTRAINT `` FOREIGN KEY (``) REFERENCES `` (``),
);