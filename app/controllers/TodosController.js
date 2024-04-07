import { AppState } from "../AppState.js";
import { todosService } from "../services/TodosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";



export class TodosController {

	constructor () {
		console.log('Todos 🎮 loaded');

		AppState.on('todos', this.drawTodos)
		AppState.on('todos', this.drawTodoCount)
		AppState.on('account', todosService.loadTodos)
	}

	createTodo() {
		try {
			window.event.preventDefault()
			console.log('🛠️ Creating todo 🛠️');
			const form = window.event.target
			const todoFormData = getFormData(form)

			console.log('here is your data', todoFormData);

			todosService.createTodo(todoFormData)

			// @ts-ignore
			form.reset() // if there is a red squiggle here, it's okay
		} catch (error) {
			console.error('[CREATING TODO]', error)
			window.alert(error.message)
		}
	}


	drawTodos() {
		const todos = AppState.todos
		let todosContent = ''
		todos.forEach(todo => todosContent += todo.ListTemplate)
		setHTML('todoList', todosContent)
	}

	drawTodoCount() {
		setText('todoCount', AppState.todos.length)
	}

	async deleteTodo(id) {
		const wantsToDestroy = await Pop.confirm("Are you sure you want to delete this todo?")

		console.log('do they want to destroy the todo', wantsToDestroy);

		if (wantsToDestroy == false) {
			return
		}

		console.log('destroying this todo!!!!!');

		todosService.deleteTodo(id)
	}


	modifyChecked(id) {
		try {

			todosService.modifyChecked(id)
			console.log("MODIFYING CHECKBOX")

		} catch (error) {
			Pop.toast("Could NOT change checked modifier", 'error')
			console.error(error)
		}
	}
}