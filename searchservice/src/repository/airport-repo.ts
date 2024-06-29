import { AirportDTO } from '@/DTO/airport';
import { db } from '@/db/db';
import airport from '@/db/models/airport';
import { eq } from 'drizzle-orm';

class AirportRepo {
	public async addAirport(airportDTO: AirportDTO) {
		return db.insert(airport).values(airportDTO).returning();
	}

	public async removeAirport(id: string) {
		return db.delete(airport).where(eq(airport.id, id));
	}
}

export default AirportRepo;
