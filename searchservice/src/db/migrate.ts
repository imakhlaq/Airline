import postgres from 'postgres';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { drizzle } from 'drizzle-orm/postgres-js';
import { env } from '@/config/env';

const migrationClient = postgres(env.DB_URL!, { max: 1 });

async function runMigration() {
	//starting migration
	await migrate(drizzle(migrationClient), {
		migrationsFolder: './src/db/drizzle/'
	});

	//closing migration client
	await migrationClient.end();
}

runMigration().catch((err) => console.log(err.message));
