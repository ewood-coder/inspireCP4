import { AppState } from "../AppState.js";
import { imagesService } from "../services/ImagesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



export class ImagesController {

	constructor () {
		console.log("Images 🎮 loaded")
		AppState.on("bgImage", this.setBgImage)
		AppState.on("imgAuthor", this.setImgAuthor)
		this.getRandomImg()
	}

	setBgImage() {
		const bgImage = document.getElementById('bgImage')
		bgImage.style.backgroundImage = `url('${AppState.bgImage}')`
	}

	getRandomImg() {
		imagesService.getRandomImg()
	}

	setImgAuthor() {
		const imgAuthor = document.getElementById('imgAuthor')
		imgAuthor.innerText = `Image by: ${AppState.imgAuthor}`
	}
}