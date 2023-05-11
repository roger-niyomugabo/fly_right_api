/* eslint-disable no-console */
import mongoose from 'mongoose';
import Ticket from '../models/ticket';
import config from '../../helpers/config';

mongoose.connect(config.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected successfully!!');
  })
  .catch((error) => { throw error; });

const seedTicket = [
  {
    ticketNumber: 'ABC649301747-Y',
    firstName: 'Roger',
    lastName: 'NIYOMUGABO',
    destination: 'Chicago',
    seatNumber: '12A',
    flightNumber: 'FL123',
    airline: 'FlyRight Airlines',
    departureDate: new Date('2023-05-15T09:00:00Z'),
    arrivalDate: new Date('2023-05-15T12:30:00Z'),
    baggageAllowance: '1 checked bag, 10kg',
    fareClass: 'Economy',
    ticketIssuer: 'FlyRight Airlines',
    ticketValidity: {
      startDate: new Date('2023-05-10T00:00:00Z'),
      endDate: new Date('2023-05-20T23:59:59Z')
    }
  },
  {
    ticketNumber: 'ABC068301747-Z',
    firstName: 'Aimee',
    lastName: 'UMUHOZA',
    destination: 'Los Angeles',
    seatNumber: '7C',
    flightNumber: 'FL456',
    airline: 'FlyRight Airlines',
    departureDate: new Date('2023-06-01T13:45:00Z'),
    arrivalDate: new Date('2023-06-01T19:30:00Z'),
    baggageAllowance: '2 checked bags, 20kg each',
    fareClass: 'Business',
    ticketIssuer: 'FlyRight Airlines',
    ticketValidity: {
      startDate: new Date('2023-05-25T00:00:00Z'),
      endDate: new Date('2023-06-05T23:59:59Z')
    }
  },
  {
    ticketNumber: 'DEF123456789-X',
    firstName: 'Keren',
    lastName: 'IYAMUREMYE',
    destination: 'London',
    seatNumber: '10B',
    flightNumber: 'FL789',
    airline: 'FlyRight Airlines',
    departureDate: new Date('2023-07-20T14:30:00Z'),
    arrivalDate: new Date('2023-07-20T20:15:00Z'),
    baggageAllowance: '1 checked bag, 15kg',
    fareClass: 'Economy',
    ticketIssuer: 'FlyRight Airlines',
    ticketValidity: {
      startDate: new Date('2023-07-15T00:00:00Z'),
      endDate: new Date('2023-07-25T23:59:59Z')
    }
  }
];

const seedDB = async () => {
  try {
    await Ticket.deleteMany({});
    await Ticket.insertMany(seedTicket);
  } catch (error) {
    throw error;
  }
};

seedDB().then(() => { mongoose.connection.close(); });
