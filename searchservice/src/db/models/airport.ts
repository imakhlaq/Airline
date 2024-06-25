import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import city from '@/db/models/city';
import flights from '@/db/models/flights';

const airport = pgTable('airports', {
	id: uuid('airport_id').primaryKey().defaultRandom(),
	name: varchar('airport_name', { length: 256 }).notNull(),
	cityId: uuid('city_id').references(() => city.id),
	address: varchar('airport_name', { length: 256 }).notNull()
});

export const airportRelations = relations(airport, ({ one, many }) => ({
	city: one(city, {
		fields: [airport.cityId],
		references: [city.id]
	}),
	flights: many(flights)
}));

export default airport;
