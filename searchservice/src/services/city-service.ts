import CityRepo from '@/repository/city-repo';
import { CityDTO, CityIdDTO } from '@/DTO/city';

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

	async getCity(cityId: CityIdDTO) {
		const data = await this.cityRepo.getCity(cityId);

		console.log(data);
		return data;
	}

	async deleteCity(id: CityIdDTO) {
		const deletedCity = await this.cityRepo.deleteCity(id);

		if (!deletedCity) throw new Error();

		return deletedCity;
	}

	async updateCity(data: any, id: string) {
		return;
	}
}

export default CityService;
