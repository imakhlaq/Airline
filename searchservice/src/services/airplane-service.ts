import AirplaneRepo from '@/repository/airplane-repo';
import { AirplaneDTO, CapacityDTO } from '@/DTO/airplane';
import { CapacityExceeded } from '@/errors/airplane';
import { StatusCodes } from 'http-status-codes';

class AirplaneService {
	private readonly airplaneRepo: AirplaneRepo;

	constructor() {
		this.airplaneRepo = new AirplaneRepo();
	}

	public async addAirplane(airplaneDTO: AirplaneDTO) {
		return this.airplaneRepo.create(airplaneDTO);
	}

	public async removeAirplane(id: string) {
		return this.airplaneRepo.delete(id);
	}

	public async updateCapacity(capacityDTO: CapacityDTO) {
		//checking available capacity
		const availableCapacity = await this.airplaneRepo.getAvailableCapacity(capacityDTO.airplaneId);

		const newAvailable = +availableCapacity - +capacityDTO.seatBooked;
		if (newAvailable <= 0)
			throw new CapacityExceeded(StatusCodes.BAD_REQUEST, 'Exceeded the available capacity', '/update-capacity');

		//updating available capacity
		return this.airplaneRepo.updateCapacity(newAvailable, capacityDTO.airplaneId);
	}
}

export default AirplaneService;
