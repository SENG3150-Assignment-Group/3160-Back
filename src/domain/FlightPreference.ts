import Flight from "./Flight";

class FlightPreference{  

    preferenceId: number;
    preferenceName: string;
    accountId: number;
    seatClass: string;
    priceMax: number;
    departureTime: string;
    arrivalTime: string;
    numberOfStops: number;
    carryOnBaggage: boolean;
    checkedBaggage: boolean;

    constructor(
        preferenceId: number,
        preferenceName: string,
        accountId: number,
        seatClass: string,
        priceMax: number,
        departureTime: string,
        arrivalTime: string,
        numberOfStops: number,
        carryOnBaggage: boolean,
        checkedBaggage: boolean
    ) {
        this.preferenceId = preferenceId;
        this.preferenceName = preferenceName;
        this.accountId = accountId;
        this.seatClass = seatClass;
        this.priceMax = priceMax;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.numberOfStops = numberOfStops;
        this.carryOnBaggage = carryOnBaggage;
        this.checkedBaggage = checkedBaggage;
    }

    // Getters
    public getPreferenceId = (): number => {
        return this.preferenceId;
    }
    public getPreferenceName = (): string => {
        return this.preferenceName;
    }
    public getAccountId = (): number => {
        return this.accountId;
    }
    public getSeatClass = (): string => {
        return this.seatClass;
    }
    public getPriceMax = (): number => {
        return this.priceMax;
    }
    public getDepartureTime = (): string => {
        return this.departureTime;
    }
    public getArrivalTime = (): string => {
        return this.arrivalTime;
    }
    public getNumberOfStops = (): number => {
        return this.numberOfStops;
    }
    public getCarryOnBaggage = (): boolean => {
        return this.carryOnBaggage;
    }
    public getCheckedBaggage = (): boolean => {
        return this.checkedBaggage;
    }

    // Setters    
    public setPreferenceId = (preferenceId: number) => {
        this.preferenceId = preferenceId;
    }
    public setPreferenceName = (preferenceName: string) => {
        this.preferenceName = preferenceName;
    }
    public setAccountId = (accountId: number) => {
        this.accountId = accountId;
    }
    public setSeatClass = (seatClass: string) => {
        this.seatClass = seatClass;
    }
    public setPriceMax = (priceMax: number) => {
        this.priceMax = priceMax;
    }
    public setDepartureTime = (departureTime: string) => {
        this.departureTime = departureTime;
    }
    public setArrivalTime = (arrivalTime: string) => {
        this.arrivalTime = arrivalTime;
    }
    public setNumberOfStops = (numberOfStops: number) => {
        this.numberOfStops = numberOfStops;
    }
    public setCarryOnBaggage = (carryOnBaggage: boolean) => {
        this.carryOnBaggage = carryOnBaggage;
    }
    public setCheckedBaggage = (checkedBaggage: boolean) => {
        this.checkedBaggage = checkedBaggage;
    }
}
export default FlightPreference;