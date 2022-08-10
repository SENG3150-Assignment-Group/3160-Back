class WishlistedLocation{
    locationCode: string;
    accountId: number;
    dateAdded: Date;

    constructor(
        locationCode: string,
        accountId: number,
        dateAdded: Date
    ) {
        this.locationCode = locationCode;
        this.accountId = accountId;
        this.dateAdded = dateAdded;
    }

    // Getters
    public getLocationCode = (): string => {
        return this.locationCode;
    }
    public getAccountId = (): number => {
        return this.accountId;
    }
    public getDateAdded = (): Date => {
        return this.dateAdded;
    }

    // Setters
    public setLocationCode = (locationCode: string) => {
        this.locationCode = locationCode;
    }
    public setAccountId = (accountId: number) => {
        this.accountId = accountId;
    }
    public setDateAdded = (dateAdded: Date) => {
        this.dateAdded = dateAdded;
    }
}