import CityRepo from '@/repository/city-repo';
import { CityDTO, CityIdDTO } from '@/DTO/city';
import { NoCityFound } from '@/errors/city';
import { StatusCodes } from 'http-status-codes';

class CityService {
	private cityRepo: CityRepo;

	constructor() {
		this.cityRepo = new CityRepo();
	}

	async createCity(cityDTO: CityDTO) {
		console.log('Creating city');
		return await this.cityRepo.createCity(cityDTO);
	}

	async getCity(cityId: CityIdDTO) {
		const data = await this.cityRepo.getCity(cityId);

		if (!data.length) throw new NoCityFound(StatusCodes.BAD_REQUEST, 'No city found', '/get-city:id');

		return data;
	}

	async deleteCity(id: CityIdDTO) {
		const deletedCity = await this.cityRepo.deleteCity(id);

		if (!deletedCity.length) throw new NoCityFound(StatusCodes.BAD_REQUEST, 'Invalid city id', '/delete-city:id');

		return deletedCity;
	}

	async getAllCities(limit: number, offset: number, query?: string) {
		const data = await this.cityRepo.getAllCity(limit, offset, query);

		if (!data.length) throw new NoCityFound(StatusCodes.BAD_REQUEST, 'No city found', '/get-all-city');

		return data;
	}

	async updateCity(data: any, id: string) {
		return;
	}
}

export default CityService;
