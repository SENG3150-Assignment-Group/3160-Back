const fs = require("fs");

// date range
const startDate = new Date("2022-08-25");
const endDate = new Date("2022-08-30");
// arilines
const airlines = ["JL", "JQ", "QF", "QR", "SQ", "TG"];

// flight paths
const legs = [
  { s: 5, e: 29, d: 7155 },
  { s: 5, e: 4, d: 7278 },
  { s: 5, e: 16, d: 6925 },
  { s: 5, e: 33, d: 3601 },
  { s: 4, e: 29, d: 4605 },
  { s: 16, e: 29, d: 2886 },
  { s: 33, e: 29, d: 7915 },
];

// plane types
const planes = [
  "747-100",
  "757-200",
  "757-300",
  "767-200",
  "767-300",
  "767-400",
  "A330-200",
  "A330-300",
  "A340-200",
  "A340-300",
  "A340-500",
  "A340-600",
  "A380",
];

let flightNum = 1;

// random time of day generator
const rtg = () => {
  const hours = Math.round(Math.random() * 23);
  const minutes = Math.round((Math.random() * 60) / 15) * 15;

  return hours * 60 * 60 * 1000 + minutes * 60 * 1000;
};

const rlg = () => {
  const index = Math.round(Math.random() * (legs.length - 1));

  return [index, legs[index]];
};

const rpg = () => {
  const index = Math.round(Math.random() * (planes.length - 1));

  return planes[index];
};

const rag = () => {
  const index = Math.round(Math.random() * (airlines.length - 1));

  return airlines[index];
};

const rcg = () => {
  return Math.floor(Math.random() * (999 - 100 + 1) + 100);
};

const getDuration = (distance) => {
  const time = (Math.round((distance / 660) * 4) / 4).toFixed(2);
  console.log(time);
  return time;
};

const durationToString = (duration) => {
  const time = new Date();
  time.setTime(duration * 60 * 60 * 1000);

  return time.toISOString().slice(11, 16);
};

const formatDateString = (dateString) => {
  return dateString.replace("T", " ").replace(".000Z", "");
};

const generateFlights = () => {
  let query =
    "INSERT INTO Flights (`FlightCode`,`DepartureId`,`DestinationId`,`DepartureDateTime`,`DestinationDateTime`,`StopOverId`,`AirlineCode`,`PlaneCode`,`Duration`)\nVALUES\n";
  let tQuery =
    "INSERT INTO Tickets (`TicketCode`, `TicketClass`, `Price`, `Booked`, `Transferable`, `Exchangable`, `Refundable`, `PersonName`, `PersonType`, `SpecialRequests`, `DietaryPreferences`, `CarryOnBaggage`, `CheckedBaggage`, `FlightId`, `BookingId`)\nVALUES\n";

  let currDate = new Date();
  currDate.setTime(startDate.getTime());

  while (currDate < endDate) {
    for (const leg of legs) {
      for (let i = 0; i < 5; i++) {
        // generate a time
        const time = rtg();
        // generate a plane
        const plane = rpg();
        // generate an airline
        const airline = rag();
        // generate flight Time
        const dur = getDuration(leg.d);
        const durS = durationToString(dur);

        const dDate = new Date();
        dDate.setTime(currDate.getTime() + time);
        const dDateString = formatDateString(dDate.toISOString());

        const aDate = new Date();
        aDate.setTime(dDate.getTime() + dur * 60 * 60 * 1000);
        const aDateString = formatDateString(aDate.toISOString());

        const flightcode = airline + String(flightNum).padStart(5, "0");

        const values = `('${flightcode}', '${leg.s}', '${leg.e}', '${dDateString}', '${aDateString}', null, '${airline}', '${plane}', '${durS}'),\n`;
        for (let i = 0; i < 10; i++) {
          const tValues = `('${
            flightcode + "S" + i
          }', 'economy', 500, false, true, false, false, null, null, null, null, true, false, ${flightNum}, null),\n`;
          tQuery = tQuery.concat(tValues);
        }

        flightNum += 1;
        query = query.concat(values);
      }
    }
    currDate.setDate(currDate.getDate() + 1);
  }
  query = query.slice(0, query.length - 2).concat(";");
  tQuery = tQuery.slice(0, tQuery.length - 2).concat(";");

  // console.log(query);
  // console.log(tQuery);

  fs.writeFile("./generatedQueries.txt", query + "\n" + tQuery, (err) => {
    console.log(err);
  });
};
generateFlights();
