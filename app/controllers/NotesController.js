import {AppState} from '../AppState.js';
import {notesService} from '../services/NotesService.js';
import {getFormData} from '../utils/FormHandler.js';
import {setHTML} from '../utils/Writer.js';

export class NotesController {
  constructor() {
    console.log('Notes Controller Loaded');
    this.drawNotes();
    AppState.on('notes', this.drawNotes);
  }

  drawNotes() {
    const allNotes = AppState.notes;
    let notesList = '';
    allNotes.forEach((note) => (notesList += note.NotesTemplate));
    setHTML('notes-list', notesList);
  }

  drawActiveNote() {}

  createNote() {
    event.preventDefault();
    const noteForm = event.target;
    const noteFormData = getFormData(noteForm);
    notesService.createNote(noteFormData);
  }

  setActiveNote() {}
}
