class FlightPreference{
    preferenceId: number;
    preferenceName: string;
    weather: string;
    environment: string;
    interestAreas: string;
    budget: number;

    constructor(
        preferenceId: number,
        preferenceName: string,
        weather: string,
        environment: string,
        interestAreas: string,
        budget: number
    ) {
        this.preferenceId = preferenceId;
        this.preferenceName = preferenceName;
        this.weather = weather;
        this.environment = environment;
        this.interestAreas = interestAreas;
        this.budget = budget;    
    }

    // Getters
    public getPreferenceId = (): number => {
        return this.preferenceId;
    }
    public getPreferenceName = (): string => {
        return this.preferenceName;
    }
    public getWeather = (): string => {
        return this.weather;
    }
    public getEnvironment = (): string => {
        return this.environment;
    }
    public getInterestAreas = (): string => {
        return this.interestAreas;
    }
    public getBudget = (): number => {
        return this.budget;
    }

    // Setters    
    public setPreferenceId = (preferenceId: number) => {
        this.preferenceId = preferenceId;
    }
    public setPreferenceName = (preferenceName: string) => {
        this.preferenceName = preferenceName;
    }
    public setWeather = (weather: string) => {
        this.weather = weather;
    }
    public setEnvironment = (environment: string) => {
        this.environment = environment;
    }
    public setInterestAreas = (interestAreas: string) => {
        this.interestAreas = interestAreas;
    }
    public setBudget = (budget: number) => {
        this.budget = budget;
    }

}