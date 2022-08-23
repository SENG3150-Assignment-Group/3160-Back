import Connection from "./Connection";
import Distance from "./Distance";

class FlightMatrix {
  private size: number;
  private locations: Connection[][];
  private flightSpeed: number;

  /*
   * expect zero indexing for all id references
   */
  constructor(nLocations: number, distances: Distance[], flightSpeed: number) {
    this.size = nLocations;
    this.locations = new Array(this.size)
      .fill(null)
      .map(() => new Array(this.size).fill(null));
    this.flightSpeed = flightSpeed;

    let l1;
    let l2;
    for (const d of distances) {
      l1 = d.getLocationId1();
      l2 = d.getLocationId2();

      if (this.locations[l1][l2] == null)
        this.locations[l1][l2] = new Connection(
          d.getDistanceInKms() / this.flightSpeed
        );

      if (this.locations[l2][l1] == null)
        this.locations[l2][l1] = new Connection(
          d.getDistanceInKms() / this.flightSpeed
        );
    }
  }

  public getSize = (): number => {
    return this.size;
  };

  public getConnection = (dep: number, dest: number): Connection | null => {
    return this.locations[dep][dest];
  };
}

export default FlightMatrix;
