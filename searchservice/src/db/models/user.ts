import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const user = pgTable('users', {
	id: uuid('id').primaryKey().defaultRandom(),
	name: varchar('name', { length: 256 })
});
