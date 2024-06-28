// tsx seed.ts

import { en, faker } from '@faker-js/faker';
import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from '@/config/env';
import { CityDTO } from '@/DTO/city';
import city from '@/db/models/city';

const queryClient = postgres(env.DB_URL!);

const db: PostgresJsDatabase = drizzle(queryClient, {
	logger: true
});

const generateUserRows = (count: number): CityDTO[] => {
	const rows: CityDTO[] = [];

	for (let i = 0; i < count; i++) {
		rows.push({
			name: faker.location.city()
		});
	}

	return rows;
};

async function seed() {
	console.log('Seeding...');
	console.time('DB has been seeded!');

	// database teardown
	await db.delete(city);

	// database setup
	const newUserRows = generateUserRows(100);
	await db.insert(city).values(newUserRows).returning();
}

seed()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		console.log('Seeding done!');
		process.exit(0);
	});
