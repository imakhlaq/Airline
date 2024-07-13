import CityService from '@/services/city-service';
import { Request, Response } from 'express';
import { cityIdValid, citySearchValid, cityValid } from '@/DTO/city';
import { StatusCodes } from 'http-status-codes';

class CityController {
	private readonly cityService: CityService;

	constructor() {
		this.cityService = new CityService();
	}

	public async getCity(req: Request, res: Response) {
		const cityDTO = cityIdValid.parse(req.params);

		const data = await this.cityService.getCity(cityDTO);
		return res.status(200).json(data);
	}

	public async deleteCity(req: Request, res: Response) {
		const cityDTO = cityIdValid.parse(req.params);

		const data = await this.cityService.deleteCity(cityDTO);
		return res.status(200).json(data);
	}

	public async addCity(req: Request, res: Response) {
		//validating the city
		const cityDT0 = cityValid.parse(req.body);
		const newCity = await this.cityService.createCity(cityDT0);
		return res.status(200).json(newCity);
	}

	// /all-cities?startsWith=ka&limit=5&offset=0
	public async getAllCity(req: Request, res: Response) {
		//if you have query param the base on that search and return cities
		//user can pass limit and offset to get limited cities
		const queryParams = citySearchValid.safeParse(req.query);

		if (queryParams.success) {
			console.log(req.query);
			const {
				data: { startsWith, offset = 0, limit = 5 }
			} = queryParams;

			const filteredCities = await this.cityService.getAllCities(+limit!, +offset!, startsWith);
			return res.status(200).json(filteredCities);
		}

		const allCities = await this.cityService.getAllCities(0, 0); //means all

		return res.status(StatusCodes.OK).json(allCities);
	}
}

export default CityController;
