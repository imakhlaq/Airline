import { date, integer, pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import airplane from '@/db/models/airplane';
import { relations } from 'drizzle-orm';
import airport from '@/db/models/airport';

const flights = pgTable('flights', {
	id: uuid('airplane_id').primaryKey().defaultRandom(),
	departureCityId: varchar('departure_city_id', { length: 256 }).notNull(),
	destinationCityId: varchar('destination_city_id', { length: 256 }).notNull(),
	airplaneId: uuid('city_id').references(() => airplane.id),
	departureTime: timestamp('departure_time').notNull(),
	arrivalTime: timestamp('arrival_time').notNull(),
	flightNo: varchar('flight_number').notNull(),
	airportId: uuid('city_id').references(() => airplane.id),
	createdAt: timestamp('created_at').notNull().defaultNow(),
	updatedAt: timestamp('updated_at').notNull().defaultNow()
});

export const fightsRelations = relations(flights, ({ one }) => ({
	airplane: one(airplane, {
		fields: [flights.airplaneId],
		references: [airplane.id]
	}),
	airport: one(airport, {
		fields: [flights.airportId],
		references: [airport.id]
	})
}));

export default flights;
