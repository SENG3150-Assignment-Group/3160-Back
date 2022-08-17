class Airline{
    airlineCode: string;
    airlineName: string;
    countryCode: string;
    sponsored: boolean;

    constructor(
        airlineCode: string,
        airlineName: string,
        countryCode: string,
        sponsored: boolean
    ){
        this.airlineCode = airlineCode;
        this.airlineName = airlineName;
        this.countryCode = countryCode;
        this.sponsored = sponsored;
    }

    // Getters
    public getAirlineCode = (): string => {
        return this.airlineCode;
    }
    public getAirlineName = (): string => {
        return this.airlineName;
    }
    public getCountryCode = (): string => {
        return this.countryCode;
    }
    public isSponsored = (): boolean => {
        return this.sponsored;
    }

    // Setters
    public setAirlineCode = (airlineCode: string) =>{
        this.airlineCode = airlineCode;
    } 
    public setAirlineName = (airlineName: string) =>{
        this.airlineName = airlineName;
    } 
    public setCountryCode = (countryCode: string) =>{
        this.countryCode = countryCode;
    } 
    public setSponsored = (sponsored: boolean) =>{
        this.sponsored = sponsored;
    } 
}

export default Airline;