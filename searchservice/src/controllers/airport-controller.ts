import { Request, Response } from 'express';
import AirportService from '@/services/airport-service';
import { airportValid } from '@/DTO/airport';
import { StatusCodes } from 'http-status-codes';

class AirportController {
	private readonly airportService;

	constructor() {
		this.airportService = new AirportService();
	}

	public async addAirport(req: Request, res: Response) {
		const airportDTO = airportValid.parse(req.body);
		console.log('INSIDE CONTROLLER');
		const newAirport = await this.airportService.addAirport(airportDTO);
		return res.status(StatusCodes.OK).json(newAirport);
	}

	public async removeAirport(req: Request, res: Response) {
		const data = await this.airportService.deleteAirport(req.params.id);

		return res.status(StatusCodes.OK).json(data);
	}
}

export default AirportController;
