import { AppState } from "../AppState.js";
import { quotesService } from "../services/QuotesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



export class QuotesController {

	constructor () {
		console.log('Quotes 🎮 loaded')
		AppState.on("quote", this.setQuote)
		AppState.on("quoteAuthor", this.setQuoteAuthor)
		this.getRandomQuote()
	}


	setQuote() {
		const quote = document.getElementById('quote')
		quote.innerText = `"${AppState.quote}"`
	}

	getRandomQuote() {
		quotesService.getRandomQuote()
	}

	setQuoteAuthor() {
		const quoteAuthor = document.getElementById('quoteAuthor')
		quoteAuthor.innerText = `Quote by: ${AppState.quoteAuthor}`
	}

}