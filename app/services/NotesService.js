import {AppState} from '../AppState.js';
import {Note} from '../models/Note.js';

class NotesService {
  updateNote(updatedBody) {
    const actualNote = AppState.activeNote;
    actualNote.body = updatedBody;
    actualNote.updatedAt = new Date();
    AppState.emit('activeNote');
    AppState.emit('notes');
  }
  createNote(noteFormData) {
    const allNotes = AppState.notes;
    allNotes.push(new Note(noteFormData));
    AppState.activeNote = allNotes[allNotes.length - 1];
  }

  deleteNote(noteId) {
    const allNotes = AppState.notes;
    const noteIndex = allNotes.findIndex((note) => note.id === noteId);
    allNotes.splice(noteIndex, 1);
    AppState.activeNote = null;
  }

  setActiveNote(noteId) {
    const actualNotes = AppState.notes;
    const foundNote = actualNotes.find((note) => note.id === noteId);
    AppState.activeNote = foundNote;
  }
}

export const notesService = new NotesService();
