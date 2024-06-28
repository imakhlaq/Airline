import { integer, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import flights from '@/db/models/flights';
import { timestamp } from 'drizzle-orm/pg-core';

const airplane = pgTable('airplanes', {
	id: uuid('airplane_id').primaryKey().defaultRandom(),
	modelNumber: varchar('airplane_model_number', { length: 256 }).notNull(),
	capacity: integer('airplane_capacity').notNull(),
	createdAt: timestamp('created_at').notNull().defaultNow(),
	updatedAt: timestamp('updated_at').notNull().defaultNow()
});

export const planeRelations = relations(airplane, ({ many }) => ({
	flights: many(flights)
}));

export default airplane;
