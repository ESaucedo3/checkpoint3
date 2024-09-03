import {NotesController} from './controllers/NotesController.js';

const USE_ROUTER = false;

class App {
  NotesController = new NotesController();
}

const app = new App();
// @ts-ignore
window.app = app;
