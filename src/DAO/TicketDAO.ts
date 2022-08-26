import {
  ModelStatic,
  Model,
  ValidationError,
  UniqueConstraintError,
} from "sequelize";
import sequelize from "../database/";

import { TicketOutput, Ticket, TicketInput } from "../database/models/Ticket";

class TicketDAO {
  private model: typeof Ticket;

  constructor() {
    this.model = Ticket;
  }

  public read = async (ticketCode: string): Promise<TicketOutput | null> => {
    return await this.model.findByPk(ticketCode);
  };

  public readAllForBooking = async (
    bookingId: number
  ): Promise<TicketOutput[] | null> => {
    return await this.model.findAll({ where: { BookingId: bookingId } });
  };

  public create = async (
    ticketCode: string,
    ticketClass: string,
    price: number,
    transferrable: boolean,
    exchangeable: boolean,
    refundable: boolean,
    carryOnBaggage: boolean,
    checkedBaggage: boolean,
    flightId: number
  ): Promise<Ticket | null> => {
    try {
      return await this.model.create({
        TicketCode: ticketCode,
        TicketClass: ticketClass,
        Price: price,
        Transferable: transferrable,
        Exchangable: exchangeable,
        Refundable: refundable,
        CarryOnBaggage: carryOnBaggage,
        CheckedBaggage: checkedBaggage,
        FlightId: flightId,
      });
    } catch (error: any) {
      return null;
    }
  };

  public update = async (
    ticketCode: string,
    personName: string,
    personType: string,
    specialRequests: string,
    dietaryPreferences: string,
    bookingId: number
  ): Promise<number[]> => {
    try {
      return await this.model.update(
        {
          PersonName: personName,
          PersonType: personType,
          SpecialRequests: specialRequests,
          DietaryPreferences: dietaryPreferences,
          BookingId: bookingId,
        },
        {
          where: { TicketCode: ticketCode },
        }
      );
    } catch (error: any) {
      return [0, -1];
    }
  };
}

export default TicketDAO;