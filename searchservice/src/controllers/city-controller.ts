import CityService from '@/services/city-service';
import { Request, Response } from 'express';
import { cityValid } from '@/DTO/city';

class CityController {
	private readonly cityService: CityService;

	constructor() {
		this.cityService = new CityService();
	}

	public async getCity(req: Request, res: Response) {
		return res.json({ message: 'hello' });
	}

	public async deleteCity(req: Request, res: Response) {}

	public async addCity(req: Request, res: Response) {
		//validating the city
		const cityDT0 = cityValid.parse(req.body);

		const newCity = await this.cityService.createCity(cityDT0);
		return res.status(200).json(newCity);
	}

	public async getAllCity(req: Request, res: Response) {}
}

export default CityController;
