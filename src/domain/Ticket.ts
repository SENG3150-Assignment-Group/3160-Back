import { TicketOutput } from "database/models/Ticket";

class Ticket {
  ticketCode: string;
  ticketClass: string;
  price: number;
  booked: boolean;
  transferrable: boolean;
  exchangeable: boolean;
  refundable: boolean;
  personName: string;
  personType: string;
  specialRequests: string;
  dietaryPreferences: string;
  carryOnBaggage: boolean;
  checkedBaggage: boolean;
  flightId: number;
  bookingId: number;

  constructor(
    ticketCode: string,
    ticketClass: string,
    price: number,
    booked: boolean,
    transferrable: boolean,
    exchangeable: boolean,
    refundable: boolean,
    personName: string,
    personType: string,
    specialRequests: string,
    dietaryPreferences: string,
    carryOnBaggage: boolean,
    checkedBaggage: boolean,
    flightId: number,
    bookingId: number
  ) {
    this.ticketCode = ticketCode;
    this.ticketClass = ticketClass;
    this.price = price;
    this.booked = booked;
    this.transferrable = transferrable;
    this.exchangeable = exchangeable;
    this.refundable = refundable;
    this.personName = personName;
    this.personType = personType;
    this.specialRequests = specialRequests;
    this.dietaryPreferences = dietaryPreferences;
    this.carryOnBaggage = carryOnBaggage;
    this.checkedBaggage = checkedBaggage;
    this.flightId = flightId;
    this.bookingId = bookingId;
  }

  public static modelToDomain = (model: TicketOutput): Ticket => {
    return new Ticket(
      model.TicketCode,
      model.TicketClass,
      model.Price,
      model.Booked,
      model.Transferable,
      model.Exchangable,
      model.Refundable,
      model.PersonName,
      model.PersonType,
      model.SpecialRequests,
      model.DietaryPreferences,
      model.CarryOnBaggage,
      model.CheckedBaggage,
      model.FlightId,
      model.BookingId
    );
  };

  // Getters
  public getTicketCode = (): string => {
    return this.ticketCode;
  };
  public getTicketClass = (): string => {
    return this.ticketClass;
  };
  public getPrice = (): number => {
    return this.price;
  };
  public isBooked = (): boolean => {
    return this.booked;
  };
  public isTransferrable = (): boolean => {
    return this.transferrable;
  };
  public isExchangeable = (): boolean => {
    return this.exchangeable;
  };
  public isRefundable = (): boolean => {
    return this.refundable;
  };
  public getPersonName = (): string => {
    return this.personName;
  };
  public getPersonType = (): string => {
    return this.personType;
  };
  public getDietaryPreferences = (): string => {
    return this.dietaryPreferences;
  };
  public getSpecialRequests = (): string => {
    return this.specialRequests;
  };
  public getCarryOnBaggage = (): boolean => {
    return this.carryOnBaggage;
  };
  public getCheckedBaggage = (): boolean => {
    return this.checkedBaggage;
  };
  public getFlightId = (): number => {
    return this.flightId;
  };
  public getBookingId = (): number => {
    return this.bookingId;
  };

  // Setters
  public setTicketCode = (ticketCode: string) => {
    this.ticketCode = ticketCode;
  };
  public setTicketClass = (ticketClass: string) => {
    this.ticketClass = ticketClass;
  };
  public setPrice = (price: number) => {
    this.price = price;
  };
  public setBooked = (booked: boolean) => {
    this.booked = booked;
  };
  public setTransferrable = (transferrable: boolean) => {
    this.transferrable = transferrable;
  };
  public setExchangeable = (exchangeable: boolean) => {
    this.exchangeable = exchangeable;
  };
  public setRefundable = (refundable: boolean) => {
    this.refundable = refundable;
  };
  public setPersonName = (personName: string) => {
    this.personName = personName;
  };
  public setPersonType = (personType: string) => {
    this.personType = personType;
  };
  public setDietaryPreferences = (dietaryPreferences: string) => {
    this.dietaryPreferences = dietaryPreferences;
  };
  public setSpecialRequests = (specialRequests: string) => {
    this.specialRequests = specialRequests;
  };
  public setCarryOnBaggage = (carryOnBaggage: boolean) => {
    this.carryOnBaggage = carryOnBaggage;
  };
  public setCheckedBaggage = (checkedBaggage: boolean) => {
    this.checkedBaggage = checkedBaggage;
  };
  public setFlightId = (flightId: number) => {
    this.flightId = flightId;
  };
  public setBookingId = (bookingId: number) => {
    this.bookingId = bookingId;
  };
}

export default Ticket;
