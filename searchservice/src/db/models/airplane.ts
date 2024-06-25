import { integer, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import flights from '@/db/models/flights';

const airplane = pgTable('airplanes', {
	id: uuid('airplane_id').primaryKey().defaultRandom(),
	modelNumber: varchar('airplane_model_number', { length: 256 }).notNull(),
	capacity: integer('airplane_capacity').notNull()
});

export const planeRelations = relations(airplane, ({ many }) => ({
	flights: many(flights)
}));

export default airplane;
