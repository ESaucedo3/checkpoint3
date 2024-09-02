import {NotesController} from './controllers/NotesController.js';

const USE_ROUTER = false;

// TODO
/*
  Format dates in a 'x time ago' format for updatedAt | For this you would subtract updatedAt - createdAt to get x time ago
*/

class App {
  NotesController = new NotesController();
}

const app = new App();
// @ts-ignore
window.app = app;
