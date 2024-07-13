import { Router } from 'express';
import CityController from '@/controllers/city-controller';
import AirplaneController from '@/controllers/airplane-controller';
import AirportController from '@/controllers/airport-controller';

const app = Router();

//city routes
const cityController = new CityController();

app.get('/get-city/:id', cityController.getCity.bind(cityController));
app.post('/add-city', cityController.addCity.bind(cityController));
app.delete('/delete-city/:id', cityController.deleteCity.bind(cityController));
app.get('/get-all-cities', cityController.getAllCity.bind(cityController));

//airplane routes
const airplaneController = new AirplaneController();

app.post('/add-airplane', airplaneController.addAirplane.bind(airplaneController));
app.delete('/remove-airplane/:id', airplaneController.removeAirplane.bind(airplaneController));
app.patch('/update-capacity', airplaneController.updateCapacity.bind(airplaneController));

//airport routes
const airportController = new AirportController();

app.post('/add-airport', airportController.addAirport.bind(airportController));
app.delete('/remove-airport/:id', airportController.removeAirport.bind(airportController));

export default app;
