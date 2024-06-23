/**
 * Load the environment variables in an object here.
 */
import 'dotenv/config';

export const env = {
	port: process.env.PORT,
	DB_URL: process.env.DB_URL
};
