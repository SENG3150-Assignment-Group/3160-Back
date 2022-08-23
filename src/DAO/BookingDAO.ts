import { ModelStatic, Model, Op } from "sequelize";
import sequelize from "../database/";
import Booking from "../domain/Booking";

/*interface BookingAttributes {
    //BookingId: number;
    AccountId: number;
    Email: string;
    DateCreated: Date;
    State: number;
}*/

class BookingDAO {
    private model: ModelStatic<Model<any>>;

    constructor() {
        this.model = sequelize.models.Booking;
    }

    public readBooking = async(
        bookingId: number, accountId: number
    ): Promise<Model<any> | null> => {
        return await this.model.findOne({
            where: {
                [Op.and]: [
                    {BookingId: bookingId},
                    {AccountId: accountId}
                ]
            }
        });
    };

    public readAccountsBooking = async(
        accountId: number
    ): Promise<Model<any>[] | null> => {
        return await this.model.findAll({
            where: {AccountId: accountId}
        }
    );
    };

    public createBooking = async(
        accountId: number,
        email: string,
        dateCreated: Date,
        state: State
    ): Promise<Model<any> | null> => {
        await this.model.create({
            AccountId: accountId,
            Email: email,
            DateCreated: dateCreated,
            State: state
        });

        return await this.model.findOne({
            where: {
                [Op.and]: [
                        {AccountId: accountId},
                        {Email: email},
                        {DateCreated: dateCreated},
                        {State: state}
                    ]
                }
            });
    };

    public updateBooking = async (bookingId: number, accountId: number, state: number) => {
        await this.model.update({State: state},
            {
            where: {
                [Op.and]: [
                    {BookingId: bookingId},
                    {AccountId: accountId}
                ]
            }
        })
    };
}

export default BookingDAO;