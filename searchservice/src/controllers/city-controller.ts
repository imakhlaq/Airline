import CityService from '@/services/city-service';

class CityController {
	private cityService: CityService;

	constructor() {
		this.cityService = new CityService();
	}
}
