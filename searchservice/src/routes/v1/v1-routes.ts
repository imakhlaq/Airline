import { Router } from 'express';
import CityController from '@/controllers/city-controller';
import AirplaneController from '@/controllers/airplane-controller';

const app = Router();

//city routes
const cityController = new CityController();

app.get('/get-city/:id', cityController.getCity.bind(cityController));
app.post('/add-city', cityController.addCity.bind(cityController));
app.delete('/delete-city/:id', cityController.deleteCity.bind(cityController));
app.get('/get-all-cities', cityController.getAllCity.bind(cityController));
app.patch('update-city');

//airplane routes
const airplaneController = new AirplaneController();

app.get('/add-airplane', airplaneController.addAirplane.bind(airplaneController));
app.get('/remove-airplane/:id', airplaneController.removeAirplane.bind(airplaneController));
app.get('/update-capacity', airplaneController.updateCapacity.bind(airplaneController));

export default app;
