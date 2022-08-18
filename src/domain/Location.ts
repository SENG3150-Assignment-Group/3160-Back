class Location{
    locationId: number;
    locationName: string;
    countryCode: string;
    restricted: boolean;
    restrictionStart: Date;
    restrictionEnd: Date;

    constructor(
        locationId: number,
        locationName: string,
        countryCode: string,
        restricted: boolean,
        restrictionStart: Date,
        restrictionEnd: Date
    ) {
        this.locationId = locationId;
        this.locationName = locationName;
        this.countryCode = countryCode;
        this.restricted = restricted;
        this.restrictionStart = restrictionStart;
        this.restrictionEnd = restrictionEnd;        
    }

    // Getters
    public getLocationId = (): number => {
        return this.locationId;
    }
    public getLocationName = (): string => {
        return this.locationName;
    }
    public getCountryCode = (): string => {
        return this.countryCode;
    }
    public isRestricted = (): boolean => {
        return this.restricted;
    }
    public getRestrictionStart = (): Date => {
        return this.restrictionStart;
    }
    public getRestrictionEnd = (): Date => {
        return this.restrictionEnd;
    }

    // Setters
    public setLocationId = (locationId: number) => {
        this.locationId = locationId;
    }
    public setLocationName = (locationName: string) => {
        this.locationName = locationName;
    }
    public setCountryCode = (countryCode: string) => {
        this.countryCode = countryCode;
    }
    public setRestricted = (restricted: boolean) => {
        this.restricted = restricted;
    }
    public setRestrictionStart = (restrictionStart: Date) => {
        this.restrictionStart = restrictionStart;
    }
    public setRestrictionEnd = (restrictionEnd: Date) => {
        this.restrictionEnd = restrictionEnd;
    }
}
export default Location;