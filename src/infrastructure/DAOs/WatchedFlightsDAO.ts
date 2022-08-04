import watchedFlightsJSON from "./dummyData/watchedFlights.json";
import WatchedFlightsModel from "../models/WatchedFlightsModel";

class WatchedFlightsDAO {
  watchedFlights: WatchedFlightsModel[] = [];

  constructor() {
    for (const watchedFlight of watchedFlightsJSON.watchedFlights) {
      this.watchedFlights.push(
        new WatchedFlightsModel(
          watchedFlight.accountID,
          watchedFlight.flightID,
          watchedFlight.dateAdded
        )
      );
    }
  }
  public getAllWatchedFlights = (accountID: string): WatchedFlightsModel[] => {
    const results: WatchedFlightsModel[] = [];
    for (const watchedFlight of this.watchedFlights) {
      if (watchedFlight.accountID == accountID) results.push(watchedFlight);
    }
    return results;
  };

  public createWatchedFlight = (
    watchedFlight: WatchedFlightsModel
  ): WatchedFlightsModel => {
    this.watchedFlights.push(watchedFlight);
    return watchedFlight;
  };

  public deleteWatchedFlight = (
    accountID: string,
    flightID: string
  ): boolean => {
    for (const watchedFlight of this.watchedFlights) {
      const index = this.watchedFlights.indexOf(watchedFlight, 0);
      if (
        watchedFlight.accountID == accountID &&
        watchedFlight.flightID == flightID
      ) {
        this.watchedFlights.splice(index, 0);
        return true;
      }
    }
    return false;
  };
}

export default WatchedFlightsDAO;
