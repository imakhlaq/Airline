import CityService from '@/services/city-service';
import { Request, Response } from 'express';
import { cityValid } from '@/DTO/city';

class CityController {
	private cityService: CityService;

	constructor() {
		this.cityService = new CityService();
	}

	public async getCity(req: Request, Res: Response) {}

	public async deleteCity(req: Request, Res: Response) {}

	public async addCity(req: Request, Res: Response) {
		//validating the city
		const cityDT0 = cityValid.parse(req.body);

		await this.cityService.createCity(cityDT0);
	}

	public async getAllCity(req: Request, Res: Response) {}
}

export default CityController;
