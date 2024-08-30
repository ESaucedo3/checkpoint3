import {AppState} from '../AppState.js';
import {Note} from '../models/Note.js';

class NotesService {
  createNote(noteFormData) {
    const allNotes = AppState.notes;
    allNotes.push(new Note(noteFormData));
    AppState.activeNote = allNotes[allNotes.length - 1];
  }

  setActiveNote(noteId) {
    const actualNotes = AppState.notes;
    const foundNote = actualNotes.find((note) => note.id === noteId);
    AppState.activeNote = foundNote;
  }
}

export const notesService = new NotesService();
