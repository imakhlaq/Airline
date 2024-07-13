import { PgInsertValue } from 'drizzle-orm/pg-core';
import { eq } from 'drizzle-orm';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { PgTable } from 'drizzle-orm/pg-core/table';

class Repository<T extends PgTable> {
	private readonly db: PostgresJsDatabase<any>;
	private readonly model: T;

	constructor(db: PostgresJsDatabase<any>, model: T) {
		this.db = db;
		this.model = model;
	}

	public async create(data: PgInsertValue<T>) {
		return this.db.insert(this.model).values(data).returning();
	}

	public async findById(id: string) {
		// @ts-ignore
		return this.db.select().from(this.model).where(eq(this.model.id, id));
	}

	public async findAll() {
		return this.db.select().from(this.model);
	}

	public async delete(id: string) {
		// @ts-ignore
		return this.db.delete(this.model).where(eq(this.model.id, id)).returning();
	}

	public async update(id: string, data: PgInsertValue<T>) {
		// @ts-ignore
		return this.db.update(this.model).set(data).where(eq(this.model.id, id)).returning();
	}
}

export default Repository;
