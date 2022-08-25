import { ModelStatic, Model } from "sequelize";
import sequelize from "../database/";

/*interface TicketAttributes {
    TicketId: number,
    TicketCode: string;
    TicketClass: string;
    Price: number;
    Booked: boolean;
    Transferable: boolean;
    Exchangable: boolean;
    Refundable: boolean;
    AccountId: number;
    PersonType: string;
    SpecialRequests: string;
    DietaryPreferences: string;
    CarryOnBaggage: boolean;
    CheckedBaggage: boolean;
    FlightId: number,
    BookingId: number
}*/

class TicketDAO {
    private model: ModelStatic<Model<any>>;

    constructor() {
        this.model = sequelize.models.Booking;
    }

    public readTicket = async(
        ticketCode: string, accountId: number
    ): Promise<Model<any> | null> => {
        return await this.model.findByPk(ticketCode && accountId);
    };

    public readAccountsTickets = async(
        accountId: number
    ): Promise<Model<any>[] | null> => {
        return await this.model.findAll({
            where: {AccountId: accountId}
        });
    };

    public createTicket = async(
        ticketCode: string,
        ticketClass: string,
        price: number,
        booked: boolean,
        transferrable: boolean,
        exchangeable: boolean,
        refundable: boolean,
        accountId: number,
        personType: string,
        specialRequests: string,
        dietaryPreferences: string,
        carryOnBaggage: boolean,
        checkedBaggage: boolean,
        flightId: number
    ) => {
        await this.model.create({
            TicketCode: ticketCode,
            TicketClass: ticketClass,
            Price: price,
            Booked: booked,
            Transferable: transferrable,
            Exchangable: exchangeable,
            Refundable: refundable,
            AccountId: accountId,
            PersonType: personType,
            SpecialRequests: specialRequests,
            DietaryPreferences: dietaryPreferences,
            CarryOnBaggage: carryOnBaggage,
            CheckedBaggage: checkedBaggage,
            FlightId: flightId
        })
    };

    public updateTicket = async (

        ticketId: number,
        accountId: number,
        personType: string,
        specialRequests: string,
        dietaryPreferences: string,
        bookingId: number
    ) => {
        await this.model.update({
                AccountId: accountId,
                PersonType: personType,
                SpecialRequests: specialRequests,
                DietaryPreferences: dietaryPreferences,
                BookingId: bookingId
            },
            {
                where: {TicketId: ticketId}
            })
    }
}

export default TicketDAO;