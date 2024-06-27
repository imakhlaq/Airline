import CityRepo from '@/repository/city-repo';
import { City } from '@/db/models/city';

class CityService {
	private cityRepo: CityRepo;

	constructor() {
		this.cityRepo = new CityRepo();
	}

	async createCity(cityDTO: City) {
		try {
			return await this.cityRepo.createCity(cityDTO);
		} catch (err) {
			console.log('something went wrong at service layer');
			throw { err };
		}
	}

	async getCity(cityId: string) {
		try {
			return await this.cityRepo.findCity(cityId);
		} catch (err) {
			console.log('something went wrong at service layer');
			throw { err };
		}
	}

	async deleteCity(id: string) {
		try {
			return await this.cityRepo.deleteCity(id);
		} catch (err) {
			console.log('something went wrong at service layer');
			throw { err };
		}
	}

	async updateCity(data: any, id: string) {
		try {
			return;
		} catch (err) {
			console.log('something went wrong at service layer');
			throw { err };
		}
	}
}

export default CityService;
