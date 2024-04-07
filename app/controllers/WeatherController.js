import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";



export class WeatherController {

	constructor () {
		console.log("Weather 🎮 loaded")
		AppState.on('weather', this.drawWeather)
		weatherService.getWeather()
	}

	drawWeather() {
		if (AppState.weather) {
			setHTML('weather', AppState.weather.ActiveWeatherTemplate)
		}
	}

	flipDisplayTemp() {
		weatherService.flipDisplayTemp()
	}
}