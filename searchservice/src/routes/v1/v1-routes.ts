import { Router } from 'express';
import CityController from '@/controllers/city-controller';

const app = Router();

const cityController = new CityController();

app.get('/get-city/:id', cityController.getCity.bind(cityController));
app.post('/add-city', cityController.addCity.bind(cityController));
app.delete('/delete-city/:id', cityController.deleteCity.bind(cityController));
app.get('/get-all-cities', cityController.getAllCity.bind(cityController));
app.patch('update-city');

export default app;
