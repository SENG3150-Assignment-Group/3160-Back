import Flight from "../Flight";
import Distance from "../Distance";
import FlightMatrix from "../FlightMatrix";

class FlightSearchAlgorithm {
  matrix: FlightMatrix;
  paths: number[][];
  journeys: Flight[][];

  /*
   * expect zero indexing for all id references
   */
  constructor(nLocations: number, distances: Distance[]) {
    this.paths = new Array<Array<number>>();
    this.journeys = new Array<Array<Flight>>();
    this.matrix = new FlightMatrix(nLocations, distances, 650);
  }

  public getMatrix = (): FlightMatrix => {
    return this.matrix;
  };

  public getPaths = (): number[][] => {
    return this.paths;
  };

  public findPaths = (
    dep: number,
    dest: number,
    maxStops: number
  ): number[][] => {
    const visited = new Array<boolean>(this.matrix.getSize()).fill(false);
    const cPath = new Array<number>();

    cPath.push(dep);
    this.findPathsUtil(dep, dest, visited, cPath, maxStops);

    const copyArray = this.paths.map((path) => path.slice(0));

    return copyArray;
  };

  public findPathsUtil = (
    curr: number,
    dest: number,
    visited: boolean[],
    cPath: number[],
    maxStops: number
  ): void => {
    if (curr == dest) {
      this.paths.push(cPath.slice(0)); // need to push new array rather than the reference
    }
    if (cPath.length == maxStops + 2)
      // number of locations
      return;

    visited[curr] = true;
    for (let i = 0; i < this.matrix.getSize(); i++) {
      if (this.matrix.getConnection(curr, i) != null && !visited[i]) {
        const nextStop = i;
        cPath.push(nextStop);
        this.findPathsUtil(nextStop, dest, visited, cPath, maxStops);
        cPath.pop(); // nextStop
      }
    }
    visited[curr] = false;
  };

  private getWindowForPath = (maxLayover: number, path: number[]): number => {
    let window = 0;
    let con;
    for (let i = 0; i < path.length - 2; i++) {
      con = this.matrix.getConnection(path[i], path[i + 1]);
      console.log(con);
      if (con == null) {
        window = -1;
        break;
      }
      window += con.getDuration() + maxLayover;
    }

    return window;
  };

  /*
   * Calculates the window of time in which all legs of a path can occur.
   * Takes into account all departure locations and a max layover value.
   */
  public getFlightWindow = (maxLayover: number): number => {
    let maxWindow = 0;
    let window;

    for (const path of this.paths) {
      window = this.getWindowForPath(maxLayover, path);
      if (window > maxWindow) maxWindow = window;
    }

    return maxWindow + 24;
  };

  public convertPathsToLegs = (paths: number[][]): number[][] => {
    const flights = new Array<Array<number>>();
    for (const path of paths) {
      for (let i = 0; i < path.length - 1; i++) {
        flights.push(path.slice(i, i + 2));
      }
    }
    return flights;
  };

  public fillFlightsMatrix = (flights: Flight[]): void => {
    let dep;
    let dest;
    let conn;
    for (const flight of flights) {
      dep = flight.getDepartureId();
      dest = flight.getDestinationId();
      conn = this.matrix.getConnection(dep, dest);

      if (conn != null) conn.addFlight(flight);
    }
  };

  public findJourneys = (): Flight[][] => {
    let journey;
    for (const path of this.paths) {
      journey = new Array<Flight>();
      this.findJourneysUtil(0, path, journey);
    }
    return this.journeys.map((e) => e.slice(0));
  };

  private findJourneysUtil = (
    curr: number,
    path: number[],
    journey: Flight[]
  ) => {
    console.log(`curr: ${curr}, path: ${path}`);
    console.log("journey:");
    journey.forEach((flight) => {
      console.log(
        `{\nflightId: ${flight.getFlightId()}\ndepId: ${flight.getDepartureId()}\ndepId: ${flight.getDestinationId()}\n}, `
      );
    });
    console.log("-------------------");

    if (curr == path.length - 1) {
      this.journeys.push(journey.slice(0));
      return;
    }
    const con = this.matrix.getConnection(path[curr], path[curr + 1]);
    console.log(`conn:`);
    console.log(con);
    if (!con) return;
    console.log("still going");

    const visited = new Map<number, boolean>();
    const minLayover = 2;
    const toMilli = 60 * 60 * 1000;
    let nextDep, prevArr, minDep;
    let flight = con.getFlight(visited);

    while (flight != null) {
      visited.set(flight.getFlightId(), true);

      if (curr == 0) {
        journey.push(flight);
        this.findJourneysUtil(curr + 1, path, journey.slice(0));
        journey.pop();
        flight = con.getFlight(visited);

        continue;
      }

      minDep = new Date();
      nextDep = flight.getDepartureDateTime();
      prevArr = journey[curr - 1].getDestinationDateTime();
      minDep.setTime(prevArr.getTime() + minLayover * toMilli);

      if (nextDep > minDep) {
        journey.push(flight);
        this.findJourneysUtil(curr + 1, path, journey.slice(0));
        journey.pop();
      }

      flight = con.getFlight(visited);
    }
  };
}

export default FlightSearchAlgorithm;
