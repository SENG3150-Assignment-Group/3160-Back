interface FlightPreferenceAttributes {
    PreferenceId: number;
    PreferenceName: string;
    AccountId: number;
    SeatClass: string;
    PriceMax: number;
    DepartureTime: Date;
    ArrivalTime: Date;
    NumberOfStops: number;
    CarryOnBaggage: boolean;
    CheckedBaggage: boolean;
}
export default FlightPreferenceAttributes;