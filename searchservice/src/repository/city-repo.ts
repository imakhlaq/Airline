import { City } from '@/db/models/city';
import { db } from '@/db/db';
import { city } from '@/db/models';
import { eq } from 'drizzle-orm/sql/expressions/conditions';
import { CityDTO, CityIdDTO } from '@/DTO/city';

class CityRepo {
	async createCity(cityDTO: CityDTO) {
		return db.insert(city).values(cityDTO).returning();
	}

	async getCity(id: CityIdDTO) {
		return db.select().from(city).where(eq(city.id, id.id));
	}

	async updateCity(city: City, id: string) {}

	async deleteCity(id: CityIdDTO) {
		return db.delete(city).where(eq(city.id, id.id)).returning();
	}

	async getAllCity(query: any, offset: number, limit: number) {
		return db.select().from(city);
	}
}

export default CityRepo;
