import { AppState } from "../AppState.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



export class ClockController {

	constructor () {
		console.log("Clock 🎮 loaded")
		setInterval(this.drawTime, 1000)
	}

	drawTime() {
		const time = document.getElementById("clock")
		time.innerText = new Date().toLocaleTimeString(navigator.language, {
			hour: '2-digit',
			minute: '2-digit'
		});
	}
}