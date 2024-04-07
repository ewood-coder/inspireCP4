import { generateId } from "../utils/GenerateId.js"


export class Todo {

	constructor (data) {
		this.id = data.id ?? generateId()
		this.description = data.description
		this.completed = data.completed ?? false
	}


	get ListTemplate() {
		return `
			<li class="row align-items-center">
				<div class="col-10">
					<input type="checkbox" name="completedTodo" ${this.completed ? 'checked' : ''}  onchange="app.TodosController.modifyChecked('${this.id}', event)">
					${this.description}
				</div>
				<button class="hover col-2" onclick="app.TodosController.deleteTodo('${this.id}')">
					<i class="li mdi mdi-trash-can"></i>
				</button>
			</li>
		`
	}

}