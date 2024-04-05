import { generateId } from "../utils/GenerateId.js"


export class BgImage {

	constructor (data) {
		this.url = data.url
		this.imgUrl = data.imgUrl
		this.query = data.query
		this.author = data.author
		this.largeImgUrl = data.largeImgUrl
	}
}