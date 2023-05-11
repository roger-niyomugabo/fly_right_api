import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  ticketNumber: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  seatNumber: {
    type: String,
    required: true
  },
  flightNumber: {
    type: String,
    required: true
  },
  airline: {
    type: String,
    required: true
  },
  departureDate: {
    type: Date,
    required: true
  },
  arrivalDate: {
    type: Date,
    required: true
  },
  baggageAllowance: {
    type: String
  },
  fareClass: {
    type: String,
    required: true
  },
  ticketIssuer: {
    type: String,
    required: true
  },
  ticketValidity: {
    type: {
      startDate: { type: Date, required: true },
      endDate: { type: Date, required: true }
    },
    required: true
  },
});

export default mongoose.model('Ticket', ticketSchema);
