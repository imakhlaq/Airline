import CityService from '@/services/city-service';
import { Request, Response } from 'express';
import { cityIdValid, cityValid } from '@/DTO/city';
import { z } from 'zod';
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

	public async getAllCity(req: Request, res: Response) {
		const allCities = await this.cityService.getAllCities('11', 1, 3);
		console.log(allCities);
		return res.status(StatusCodes.OK).json(allCities);
	}
}

export default CityController;
