import { City } from '@/db/models/city';
import { db } from '@/db/db';
import { city } from '@/db/models';
import { eq, ilike } from 'drizzle-orm';
import { CityDTO, CityIdDTO } from '@/DTO/city';
import { NoCityFound } from '@/errors/city';
import { StatusCodes } from 'http-status-codes';

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

	async getAllCity(limit: number, offset: number, startsWith?: string) {
		//if u have starting character then return only matching cities
		if (startsWith)
			return db
				.select()
				.from(city)
				.where(ilike(city.name, `${startsWith}%`))
				.limit(limit)
				.offset(offset);

		return db.select().from(city);
	}
}

export default CityRepo;
