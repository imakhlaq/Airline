import { defineConfig } from 'drizzle-kit';
import envConfig from './src/config/envConfig';

if (!envConfig.DB_URL) throw new Error('DATABASE_URL is not set');

export default defineConfig({
	schema: './src/db/models/*',
	out: './src/db/drizzle',
	dialect: 'postgresql', // "postgresql" | "mysql"
	dbCredentials: {
		url: envConfig.DB_URL
	},

	verbose: true,
	strict: true
});
