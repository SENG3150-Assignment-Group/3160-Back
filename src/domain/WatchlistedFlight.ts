class WatchlistedFlight{
    accountId: number;
    flightCode: string;

    constructor(
        accountId: number,
        flightCode: string
    ) {
        this.accountId = accountId;
        this.flightCode = flightCode;
    }

    // Getters
    public getAccountId = (): number => {
        return this.accountId;
    }
    public getFlightCode = (): string => {
        return this.flightCode;
    }

    // Setters
    public setAccountId = (accountId: number) => {
        this.accountId = accountId;
    }
    public setFlightCode = (flightCode: string) => {
        this.flightCode = flightCode;
    }
} export default;