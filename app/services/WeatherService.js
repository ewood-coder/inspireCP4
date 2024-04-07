import { AppState } from "../AppState.js";
import { baseURL } from "../env.js"
import { api } from "./AxiosService.js"
import { loadState, saveState } from "../utils/Store.js";
import { Weather } from "../models/weather.js";



class WeatherService {

	async getWeather() {
		const response = await api.get('api/weather')
		console.log(response.data)
		AppState.weather = new Weather(response.data)
	}

	flipDisplayTemp() {
		AppState.weather.displayFarenheit = !AppState.weather.displayFarenheit
		AppState.emit('weather')
	}
}

export const weatherService = new WeatherService()