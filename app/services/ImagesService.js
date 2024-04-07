import { AppState } from "../AppState.js";
import { baseURL } from "../env.js"
import { api } from "./AxiosService.js"



class ImagesService {

	async getRandomImg() {
		const response = await api.get('api/images')
		console.log(response.data)
		AppState.bgImage = response.data.largeImgUrl
		AppState.imgAuthor = response.data.author
	}
}

export const imagesService = new ImagesService()