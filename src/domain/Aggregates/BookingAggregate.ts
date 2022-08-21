import Booking from "../Booking";
import Invoice from "../Invoice";
import Ticket from "../Ticket";

class BookingAggregate {
    bookingId: number;
    accountId: number;
    email: string;
    dateCreated: Date;
    state: State;
    ticketCode: string;
    ticketClass: string;
    price: number;
    booked: boolean;
    transferrable: boolean;
    exchangeable: boolean;
    refundable: boolean;
    personType: string;
    specialRequests: string;
    dietaryPreferences: string;
    carryOnBaggage: boolean;
    checkedBaggage: boolean;
    transactionId: number;
    date: Date;
    creditCardNumber: string;
    subTotal: number;
    tax: number;
    refundAmount: number;

    constructor(booking: Booking, ticket: Ticket, invoice: Invoice) {
        this.bookingId = booking.getBookingId();
        this.accountId = booking.getAccountId();
        this.email = booking.getEmail();
        this.dateCreated = booking.getDateCreated();
        this.state = booking.getState();
        this.ticketCode = ticket.getTicketCode();
        this.ticketClass = ticket.getTicketClass();
        this.price = ticket.getPrice();
        this.booked = ticket.isBooked();
        this.transferrable = ticket.isTransferrable();
        this.exchangeable = ticket.isExchangeable();
        this.refundable = ticket.isRefundable();
        this.personType = ticket.getPersonType();
        this.specialRequests = ticket.getSpecialRequests();
        this.dietaryPreferences = ticket.getDietaryPreferences();
        this.carryOnBaggage = ticket.getCarryOnBaggage();
        this.checkedBaggage = ticket.getCheckedBaggage();
        this.transactionId = invoice.getTansactionId();
        this.date = invoice.getDate();
        this.creditCardNumber = invoice.getCreditCardNumber();
        this.subTotal = invoice.getSubTotal();
        this.tax = invoice.getTax();
        this.refundAmount = invoice.getRefundAmount();
    }

    // Getters
    public getBookingId = (): number => {
        return this.bookingId;
    };
    public getAccountId = (): number => {
        return this.accountId;
    };
    public getEmail = (): string => {
        return this.email;
    };
    public getDateCreated = (): Date => {
        return this.dateCreated;
    };
    public getState = (): State => {
        return this.state;
    };
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
    public getTansactionId = (): number => {
        return this.transactionId;
    };
    public getDate = (): Date => {
        return this.date;
    };
    public getCreditCardNumber = (): string => {
        return this.creditCardNumber;
    };
    public getSubTotal = (): number => {
        return this.subTotal;
    };
    public getTax = (): number => {
        return this.tax;
    };
    public getRefundAmount = (): number => {
        return this.refundAmount;
    };

    // Setters
    public setAccountId = (accountId: number) => {
        this.accountId = accountId;
    };
    public setBookingId = (bookingId: number) => {
        this.bookingId = bookingId;
    };
    public setEmail = (email: string) => {
        this.email = email;
    };
    public setDateCreated = (dateCreated: Date) => {
        this.dateCreated = dateCreated;
    };
    public setState = (state: State) => {
        this.state = state;
    };
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
    public setTransactionId = (transactionId: number) => {
        this.transactionId = transactionId;
    };
    public setDate = (date: Date) => {
        this.date = date;
    };
    public setCreditCardNumber = (creditCardNumber: string) => {
        this.creditCardNumber = creditCardNumber;
    };
    public setSubTotal = (subTotal: number) => {
        this.subTotal = subTotal;
    };
    public setTax = (tax: number) => {
        this.tax = tax;
    };
    public setRefundAmount = (refundAmount: number) => {
        this.refundAmount = refundAmount;
    };

}

export default BookingAggregate;