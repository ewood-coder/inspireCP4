import { AccountController } from "./controllers/AccountController.js";
import { ClockController } from "./controllers/ClockController.js";
import { ImagesController } from "./controllers/ImagesController.js";
import { QuotesController } from "./controllers/QuotesController.js";
import { TodosController } from "./controllers/TodosController.js";
import { WeatherController } from "./controllers/WeatherController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
	{
		path: '',
		controllers: [ImagesController, QuotesController, WeatherController, ClockController, TodosController],
		view: 'app/views/InspirationView.html',
	},
	{
		path: '#/account',
		middleware: [AuthGuard],
		controllers: [AccountController],
		view: 'app/views/AccountView.html',
	}
])




