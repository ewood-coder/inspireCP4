import { AppState } from "../AppState.js";
import { baseURL } from "../env.js"
import { api } from "./AxiosService.js"



class QuotesService {

	async getRandomQuote() {
		const response = await api.get('api/quotes')
		console.log(response.data)
		AppState.quote = response.data.content
		AppState.quoteAuthor = response.data.author
	}
}

export const quotesService = new QuotesService()