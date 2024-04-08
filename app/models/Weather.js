import { generateId } from "../utils/GenerateId.js"


export class Weather {

	constructor (data) {
		this.temp = data.main.temp
		this.description = data.weather[0].description
		this.icon = data.weather.icon
		this.displayFarenheit = false
	}


	get ActiveWeatherTemplate() {
		return `
			<h4>${this.displayFarenheit ? this.Farenheit : this.Celcius}&deg; 
				${this.displayFarenheit ? 'F' : 'C'}</h4>
			<h4>${this.description}</h4>
			<h4 class="fs-2 mb-0"><img src="${this.icon}" alt="icon of weather"></h4>
			<hr />
			<button class="tempButton" onclick="app.WeatherController.flipDisplayTemp()"><b>C&deg; | F&deg;</b></button>
		`
	}

	get Celcius() {
		const celcius = this.temp - 273;
		return Math.floor(celcius)
	}

	get Farenheit() {
		let fahrenheit = this.Celcius * (9 / 5) + 32;
		return Math.floor(fahrenheit);
	}
}