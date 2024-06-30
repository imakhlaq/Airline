import AirportRepo from '@/repository/airport-repo';
import { AirportDTO } from '@/DTO/airport';

class AirportService {
	private readonly airportRepo: AirportRepo;

	constructor() {
		this.airportRepo = new AirportRepo();
	}

	public async addAirport(airportDTO: AirportDTO) {
		return this.airportRepo.create(airportDTO);
	}

	public async deleteAirport(id: string) {
		return this.airportRepo.delete(id);
	}
}

export default AirportService;
