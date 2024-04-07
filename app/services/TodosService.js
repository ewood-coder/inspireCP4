import { AppState } from "../AppState.js";
import { baseURL } from "../env.js"
import { api } from "./AxiosService.js"
import { loadState, saveState } from "../utils/Store.js";
import { Todo } from "../models/Todo.js";



class TodosService {

	async modifyChecked(id) {
		const todo = AppState.todos.find(todo => todo.id == id)
		todo.completed = !todo.completed
		const response = await api.put(`api/todos/${id}`, todo)
	}

	async createTodo(todoFormData) {

		// NOTE: We need the '...' (spread operator) here so that the object that were passing into the constructor doesn't have the property jotFormData, but instead the properties within it.
		const newTodo = new Todo({ ...todoFormData })

		// NOTE: This posts a new todo to the api so it acts as our local storage making it so we don't have to create a saveTodo function. The api = localstorage (for us only).
		const response = await api.post('api/todos', newTodo)
		console.log('New Todo response data:', response.data);

		AppState.todos.push(newTodo)
		// this.saveTodos()
	}

	async deleteTodo(id) {
		const indexOfReportToRemove = AppState.todos.findIndex(todo => todo.id == id)

		// NOTE findIndex returns -1 if your conditional never returns true. -1 still works with splice, so this is a safe way to make sure we don't delete the wrong thing 
		if (indexOfReportToRemove == -1) {
			console.error("Find Index is messed up dawg");
			return
		}

		const response = await api.delete(`api/todos/${id}`)

		AppState.todos.splice(indexOfReportToRemove, 1)
	}


	async loadTodos() {
		// const todosFromLocalStorage = loadState('todos', [Todo])
		// AppState.todos = todosFromLocalStorage

		const response = await api.get('api/todos')
		console.log(response.data)

		const todos = response.data.map(todo => new Todo(todo))
		AppState.todos = todos
	}
}

export const todosService = new TodosService()