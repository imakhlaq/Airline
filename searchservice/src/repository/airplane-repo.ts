import { db } from '@/db/db';
import airplane from '@/db/models/airplane';
import { AirplaneDTO } from '@/DTO/airplane';
import { eq } from 'drizzle-orm';

class AirplaneRepo {
	public async addAirplane(airplaneDTO: AirplaneDTO) {
		return db.insert(airplane).values(airplaneDTO).returning();
	}

	public async removeAirplane(id: string) {
		return db.delete(airplane).where(eq(airplane.id, id));
	}

	public async getAvailableCapacity(id: string) {
		return db.select({ capacity: airplane.capacity }).from(airplane).where(eq(airplane.id, id));
	}

	public async updateCapacity(availableCapacity: number, id: String) {
		return db
			.update(airplane)
			.set({ capacity: availableCapacity })
			.where(eq(airplane.id, id as string))
			.returning();
	}
}

export default AirplaneRepo;
