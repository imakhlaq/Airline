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
		try {
			return await this.cityRepo.create(cityDTO);
		} catch (err) {
			throw new NoCityFound(StatusCodes.BAD_REQUEST, 'City already exits', '/add-city');
		}
	}

	async getCity({ id }: CityIdDTO) {
		const data = await this.cityRepo.findById(id);

		if (!data.length) throw new NoCityFound(StatusCodes.BAD_REQUEST, 'No city found', '/get-city:id');

		return data;
	}

	async deleteCity({ id }: CityIdDTO) {
		const deletedCity = await this.cityRepo.delete(id);

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
