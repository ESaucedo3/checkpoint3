import {AppState} from '../AppState.js';
import {Note} from '../models/Note.js';

class NotesService {
  createNote(noteFormData) {
    const allNotes = AppState.notes;
    allNotes.push(new Note(noteFormData));
  }
}

export const notesService = new NotesService();
