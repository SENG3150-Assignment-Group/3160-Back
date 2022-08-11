class Flight {
  flightCode: string;
  departureId: number;
  departureCode: string;
  departureDateTime: Date;    
  destinationCode: string;
  destinationId: number;
  destinationDateTime: Date;    
  stopOverCode: string;
  airlineCode: string;
  planeCode: string;
  duration: number;    
  numSeats: number;

  constructor(
      flightCode: string,
      departureCode: string,
      departureId: number,
      departureDateTime: Date,        
      destinationCode: string,
      destinationId: number,
      destinationDateTime: Date, 
      stopOverCode: string,       
      airlineCode: string,
      planeCode: string,
      duration: number,        
      numSeats: number
  ) {
      this.flightCode = flightCode;
      this.departureCode = departureCode;
      this.departureId = departureId;
      this.departureDateTime = departureDateTime;        
      this.destinationCode = destinationCode;
      this.destinationId = destinationId;
      this.destinationDateTime = destinationDateTime;  
      this.stopOverCode = stopOverCode;      
      this.airlineCode = airlineCode;
      this.planeCode = planeCode; 
      this.duration = duration;        
      this.numSeats = numSeats;
  }

  // Getters
  public getFlightCode = (): string => {
      return this.flightCode;
  }
  public getDepartureCode = (): string => {
      return this.departureCode;
  }
  public getDepartureId = (): number => {
      return this.departureId;
  }
  public getDepartureDateTime = (): Date => {
      return this.departureDateTime;
  }
  public getDestinationCode = (): string => {
      return this.destinationCode;
  }
  public getDestinationId = (): number => {
      return this.departureId;
  }
  public getDestinationDateTime = (): Date => {
      return this.destinationDateTime;
  }
  public getStopOverCode = (): string => {
    return this.stopOverCode;
}
  public getAirlineCode = (): string => {
      return this.airlineCode;
  }
  public getPlaneCode = (): string => {
      return this.planeCode;
  }
  public getDuration = (): number => {
      return this.duration;
  }
  public getNumSeats = (): number => {
      return this.numSeats;
  }



  // Setters
  public setFlightCode = (flightCode: string) => {
      this.flightCode = flightCode;
  }
  public setDepartureCode = (departureCode: string) => {
      this.departureCode = departureCode;
  }
  public setDepartureId = (departureId: number) => {
      this.departureId = departureId;
  }
  public setDepartureDateTime = (departureDateTime: Date) => {
      this.departureDateTime = departureDateTime;
  }
  public setDestinationCode = (destinationCode: string) => {
      this.destinationCode = destinationCode;
  }
  public setDestinationId = (destinationId: number) => {
      this.destinationId = destinationId;
  }
  public setDestinationDateTime = (destinationDateTime: Date) => {
      this.destinationDateTime = destinationDateTime;
  }
  public setStopOverCode = (stopOverCode: string) => {
    this.stopOverCode = stopOverCode;
}
  public setAirlineCode = (airlineCode: string) => {
      this.airlineCode = airlineCode;
  }
  public setPlaneCode = (planeCode: string) => {
      this.planeCode = planeCode;
  }
  public setDuration = (duration: number) => {
      this.duration = duration;
  }
  public setNumSeats = (numSeats: number) => {
      this.numSeats = numSeats;
  }



}

export default Flight;