const planes = {
  747: { seats: 500, firstClass: 50, economy: 450 },
  a380: { seats: 500, firstClass: 50, economy: 450 },
};


const ticketCode;

console.log(
  `INSERT INTO Tickets (TicketCode, TicketClass, Price, Booked, Transferable, Exchangable, Refundable, AccountId, PersonType, SpecialRequests, DietaryPreferences, CarryOnBaggage, CheckedBaggage, FlightId, BookingId) VALUES (${ticketCode});`
);
