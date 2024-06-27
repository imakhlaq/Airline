import { Router } from 'express';
import CityController from '@/controllers/city-controller';

const app = Router();

const cityController = new CityController();

app.get('/get-city/:id', cityController.getCity);
app.post('/add-city', cityController.addCity);
app.delete('/delete-city', cityController.deleteCity);
app.get('get-all-city', cityController.getAllCity);
app.patch('update-city');

export default app;
