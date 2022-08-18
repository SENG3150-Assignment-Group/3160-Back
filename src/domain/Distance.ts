class Distance{
    locationId1: number;
    locationId2: number;
    distanceInKms: number;

    constructor(
        locationId1: number,
        locationId2: number,
        distanceInKms: number
    ) {
        this.locationId1 = locationId1;
        this.locationId2 = locationId2;
        this.distanceInKms = distanceInKms;
    }

    // Getters
    public getLocationId1 = (): number => {
        return this.locationId1;
    }
    public getLocationId2 = (): number => {
        return this.locationId2;
    }
    public getDistanceInKms = (): number => {
        return this.distanceInKms;
    }

    // Setters
    public setLocationId1 = (locationId1: number) => {
        this.locationId1 = locationId1;
    }
    public setLocationId2 = (locationId2: number) => {
        this.locationId2 = locationId2;
    }
    public setDistanceInKms = (distanceInKms: number) => {
        this.distanceInKms = distanceInKms;
    }
}
export default Distance;