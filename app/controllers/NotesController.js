import {AppState} from '../AppState.js';
import {setHTML} from '../utils/Writer.js';

export class NotesController {
  constructor() {
    console.log('Notes Controller Loaded');
    this.drawNotes();
  }

  drawNotes() {
    const allNotes = AppState.notes;
    let notesList = '';
    allNotes.forEach((note) => (notesList += note.NotesTemplate));
    setHTML('notes-list', notesList);
  }

  drawActiveNote() {}

  setActiveNote() {}
}
