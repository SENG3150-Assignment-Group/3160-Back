import { ModelStatic, Model } from "sequelize";
import sequelize from "../database/";
import Booking from "../domain/Booking";

interface BookingAttributes {
    BookingId: number;
    AccountId: number;
    Email: string;
    DateCreated: Date;
    State: number;
}

class BookingDAO {
    private model: ModelStatic<Model<BookingAttributes>>;

    constructor() {
        this.model = sequelize.models.Booking;
    }

    public readBooking = async(
        bookingId: number, accountId: number
    ): Promise<Model<BookingAttributes> | null> => {
        return await this.model.findByPk(bookingId && accountId);
    };

    public readAccountsBooking = async(
        accountId: number
    ): Promise<Model<BookingAttributes>> => {
        let booking = await this.model.findByPk(accountId);
        if (booking == null) {
            let date = new Date('2000-01-01');
            booking = new Booking(-1," ",date,0);
        }
        return booking;
    };

    public readAllBookings = async(): Promise<Model<BookingAttributes>[]> => {
        return await this.model.findAll();
    };
}

export default BookingDAO;