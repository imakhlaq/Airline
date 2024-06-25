import postgres from 'postgres';
import { env } from '@/config/env';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from '@/db/models';

const client = postgres(env.DB_URL!);

export const db = drizzle(client, { schema, logger: true });
