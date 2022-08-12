import watchListedFlightJSON from "./dummyData/watchListedFlight.json";
import WatchListedFlightModel from "../models/WatchListedFlightModel";

class WatchListedFlightDAO {
  watchListedFlight: WatchListedFlightModel[] = [];

  constructor() {
    for (const watchedFlight of watchListedFlightJSON.watchListedFlight) {
      this.watchListedFlight.push(
        new WatchListedFlightModel(
          watchedFlight.accountID,
          watchedFlight.flightID,
          watchedFlight.dateAdded
        )
      );
    }
  }
  public getAllWatchListedFlight = (accountID: string): WatchListedFlightModel[] => {
    const results: WatchListedFlightModel[] = [];
    for (const watchedFlight of this.watchListedFlight) {
      if (watchedFlight.accountID == accountID) results.push(watchedFlight);
    }
    return results;
  };

  public createWatchedFlight = (
    watchedFlight: WatchListedFlightModel
  ): WatchListedFlightModel => {
    this.watchListedFlight.push(watchedFlight);
    return watchedFlight;
  };

  public deleteWatchedFlight = (
    accountID: string,
    flightID: string
  ): boolean => {
    for (const watchedFlight of this.watchListedFlight) {
      const index = this.watchListedFlight.indexOf(watchedFlight, 0);
      if (
        watchedFlight.accountID == accountID &&
        watchedFlight.flightID == flightID
      ) {
        this.watchListedFlight.splice(index, 0);
        return true;
      }
    }
    return false;
  };
}

export default WatchListedFlightDAO;
