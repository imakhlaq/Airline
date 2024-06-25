import { defineConfig } from 'drizzle-kit';
import { env } from './src/config/env';

if (!env.DB_URL) throw new Error('DATABASE_URL is not set');

export default defineConfig({
	schema: './src/db/models/index.ts',
	out: './src/db/drizzle',
	dialect: 'postgresql', // "postgresql" | "mysql"
	dbCredentials: {
		url: env.DB_URL
	},
	verbose: true,
	strict: true
});
