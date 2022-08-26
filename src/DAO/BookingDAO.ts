import { Op } from "sequelize";
import {
  BookingInput,
  BookingOutput,
  Booking,
} from "../database/models/Booking";
import State from "../domain/State";

class BookingDAO {
  private model: typeof Booking;

  constructor() {
    this.model = Booking;
  }

  public read = async (id: number): Promise<BookingOutput | null> => {
    return await this.model.findByPk(id);
  };

  public readAccountsBookings = async (
    accountId: number
  ): Promise<BookingOutput[]> => {
    return await this.model.findAll({
      where: { AccountId: accountId },
    });
  };

  public create = async (
    accountId: number,
    email: string,
    dateCreated: Date,
    state: State
  ): Promise<BookingOutput | null> => {
    try {
      return await this.model.create({
        AccountId: accountId,
        Email: email,
        DateCreated: dateCreated,
        State: state,
      });
    } catch (error: any) {
      console.log(error);
      return null;
    }
  };

  public update = async (id: number, state: State): Promise<number[]> => {
    try {
      return await this.model.update(
        { State: state },
        { where: { BookingId: id } }
      );
    } catch (error: any) {
      return [0, -1];
    }
  };
}

export default BookingDAO;
