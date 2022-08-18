interface FlightAttributes {
    FlightId: number;
    FlightCode: string;
    DepartureId: number;
    DepartureDateTime: Date;
    DestinationId: number;
    DestinationDateTime: Date;
    StopOverId: number;
    AirlineCode: string;
    PlaneCode: string;
    Duration: Date;
}
export default FlightAttributes;