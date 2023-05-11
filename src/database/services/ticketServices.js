import Ticket from '../models/ticket';

class TicketServices {
  static async findTicket(ticket) {
    try {
      return await Ticket.findOne(ticket);
    } catch (error) {
      throw error;
    }
  }
}

export default TicketServices;
