import { db } from '@/db/db';
import airplane from '@/db/models/airplane';
import { eq } from 'drizzle-orm';
import Repository from '@/repository/IRepository';

class AirplaneRepo extends Repository<typeof airplane> {
	constructor() {
		super(db, airplane);
	}

	public async getAvailableCapacity(id: string) {
		return db.select({ capacity: airplane.capacity }).from(airplane).where(eq(airplane.id, id));
	}

	public async updateCapacity(availableCapacity: number, id: string) {
		return db.update(airplane).set({ capacity: availableCapacity }).where(eq(airplane.id, id)).returning();
	}
}

export default AirplaneRepo;
