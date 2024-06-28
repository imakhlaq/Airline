import { Response, Request } from 'express';
import { airplaneValid, capacityChangeValid } from '@/DTO/airplane';
import AirplaneService from '@/services/airplane-service';
import { StatusCodes } from 'http-status-codes';

class AirportController {
	private readonly airplaneService: AirplaneService;

	constructor() {
		this.airplaneService = new AirplaneService();
	}

	public async addAirplane(req: Request, res: Response) {
		const airplaneDTO = airplaneValid.parse(req.body);

		const data = await this.airplaneService.addAirplane(airplaneDTO);

		return res.status(StatusCodes.OK).json(data);
	}

	public async removeAirplane(req: Request, res: Response) {
		const { id } = req.params;

		const data = await this.airplaneService.removeAirplane(id as string);

		return res.status(StatusCodes.OK).json(data);
	}

	public async updateCapacity(req: Request, res: Response) {
		const capacityDTO = capacityChangeValid.parse(req.body);

		const data = await this.airplaneService.updateCapacity(capacityDTO);

		return res.status(StatusCodes.OK).json(data);
	}
}

export default AirportController;
