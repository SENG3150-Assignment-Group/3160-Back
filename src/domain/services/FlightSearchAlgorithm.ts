import Flight from "../Flight";
import Distance from "../Distance";
import FlightMatrix from "../FlightMatrix";

class FlightSearchAlgorithm {
  matrix: FlightMatrix;
  paths: number[][];

  /*
   * expect zero indexing for all id references
   */
  constructor(nLocations: number, distances: Distance[]) {
    this.paths = new Array<Array<number>>();
    this.matrix = new FlightMatrix(nLocations, distances, 880);
  }

  public findPaths = (
    dep: number,
    dest: number,
    maxStops: number
  ): number[][] => {
    const visited = new Array<boolean>(this.matrix.getSize()).fill(false);
    const cPath = new Array<number>();

    cPath.push(dep);
    this.findPathsUtil(dep, dest, visited, cPath, maxStops);

    return this.paths;
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

    return maxWindow;
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

  public getFlightCombinations = () => [];
}

export default FlightSearchAlgorithm;
