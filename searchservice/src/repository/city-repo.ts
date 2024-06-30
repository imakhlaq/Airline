import { db } from '@/db/db';
import { city } from '@/db/models';
import { ilike } from 'drizzle-orm';
import Repository from '@/repository/IRepository';

class CityRepo extends Repository<typeof city> {
	constructor() {
		super(db, city);
	}

	//specialized methods
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
