import { City } from '@/db/models/city';
import { db } from '@/db/db';
import { city } from '@/db/models';
import { eq } from 'drizzle-orm/sql/expressions/conditions';
import { CityDTO } from '@/DTO/city';

class CityRepo {
	async createCity(cityDTO: CityDTO) {
		await db.insert(city).values(cityDTO).returning();
	}

	async findCity(id: string) {
		return await db.select().from(city).where(eq(city.id, id));
	}

	async updateCity(city: City, id: string) {}

	async deleteCity(id: string) {
		return await db.delete(city).where(eq(city.id, id));
	}
}

export default CityRepo;
