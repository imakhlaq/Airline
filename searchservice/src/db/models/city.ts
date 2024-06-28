import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { InferSelectModel, relations } from 'drizzle-orm';
import airport from '@/db/models/airport';
import { timestamp } from 'drizzle-orm/pg-core';

const city = pgTable('city', {
	id: uuid('city_id').primaryKey().defaultRandom(),
	name: varchar('city_name', { length: 256 }).notNull().unique(),
	createdAt: timestamp('created_at').notNull().defaultNow(),
	updatedAt: timestamp('updated_at').notNull().defaultNow()
});

export const cityRelations = relations(city, ({ many }) => ({
	airports: many(airport)
}));

export type City = InferSelectModel<typeof city>;
export default city;
