import { ModelStatic, Model } from "sequelize";
import sequelize from "../database/";

interface TicketAttributes {
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
}

class TicketDAO {
    private model: ModelStatic<Model<TicketAttributes>>;

    constructor() {
        this.model = sequelize.models.Booking;
    }

    public readTicket = async(
        ticketCode: string, accountId: number
    ): Promise<Model<TicketAttributes> | null> => {
        return await this.model.findByPk(ticketCode && accountId);
    };

    public readAccountsTickets = async(
        accountId: number
    ): Promise<Model<TicketAttributes> | null> => {
        return await this.model.findByPk(accountId);
    };


    public readAllTickets = async(): Promise<Model<TicketAttributes>[]> => {
        return await this.model.findAll();
    };
}

export default TicketDAO;