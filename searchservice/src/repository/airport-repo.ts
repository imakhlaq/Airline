import { db } from '@/db/db';
import airport from '@/db/models/airport';
import Repository from '@/repository/IRepository';

class AirportRepo extends Repository<typeof airport> {
	constructor() {
		super(db, airport);
	}
}

export default AirportRepo;
