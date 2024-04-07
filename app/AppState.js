import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Account } from './models/Account.js'
import { Todo } from './models/Todo.js'




class ObservableAppState extends EventEmitter {

	user = null

	// NOTE: The line below is replaced by the import {Account} line above since they do the same thing.
	//   /**@type {import('./models/Account.js').Account | null} */
	/** @type {Account | null} */ // NOTE: This replaces the line above because of the import.
	account = null
	// -------------------------------------------
	/** @type {string} */
	bgImage = '/assets/img/testBG2.png'

	/** @type {string} */
	imgAuthor = ''
	// -------------------------------------------
	/** @type {string} */
	quote = ''

	/** @type {string} */
	quoteAuthor = ''
	// -------------------------------------------
	/**
	 * @type {Todo[]}
	 */
	todos = []

}

export const AppState = createObservableProxy(new ObservableAppState())