import CityRepo from '@/repository/city-repo';
import { CityDTO } from '@/DTO/city';

class CityService {
	private cityRepo: CityRepo;

	constructor() {
		console.log('CITY SERVICE CONSTRUCTOR');
		this.cityRepo = new CityRepo();
	}

	async createCity(cityDTO: CityDTO) {
		console.log('Creating city');
		return await this.cityRepo.createCity(cityDTO);
	}

	async getCity(cityId: string) {
		return await this.cityRepo.findCity(cityId);
	}

	async deleteCity(id: string) {
		return await this.cityRepo.deleteCity(id);
	}

	async updateCity(data: any, id: string) {
		return;
	}
}

export default CityService;
