import { City } from '@/db/models/city';
import { db } from '@/db/db';
import { city } from '@/db/models';
import { eq } from 'drizzle-orm/sql/expressions/conditions';

class CityRepo {
	async createCity(cityDTO: City) {
		try {
			await db.insert(city).values(cityDTO);
		} catch (err) {
			console.log(err);
			throw { err };
		}
	}

	async findCity(id: string) {
		try {
			return await db.select().from(city).where(eq(city.id, id));
		} catch (err) {
			console.log(err);
			throw { err };
		}
	}

	async updateCity(city: City, id: string) {}

	async deleteCity(id: string) {
		try {
			return await db.delete(city).where(eq(city.id, id));
		} catch (err) {
			throw { err };
		}
	}
}

export default CityRepo;
