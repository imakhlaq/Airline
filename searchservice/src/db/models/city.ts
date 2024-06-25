import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { InferSelectModel, relations } from 'drizzle-orm';
import airport from '@/db/models/airport';

const city = pgTable('city', {
	id: uuid('airport_id').primaryKey().defaultRandom(),
	name: varchar('airport_name', { length: 256 }).notNull()
});

export const cityRelations = relations(city, ({ many }) => ({
	airports: many(airport)
}));

export type City = InferSelectModel<typeof city>;
export default city;
