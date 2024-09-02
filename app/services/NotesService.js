import {AppState} from '../AppState.js';
import {Note} from '../models/Note.js';
import {loadState, saveState} from '../utils/Store.js';

class NotesService {
  updateNote(updatedBody) {
    const actualNote = AppState.activeNote;
    actualNote.body = updatedBody;
    actualNote.updatedAt = new Date();
    AppState.emit('activeNote');
    AppState.emit('notes');
    this.saveNotes();
  }
  createNote(noteFormData) {
    const allNotes = AppState.notes;
    allNotes.push(new Note(noteFormData));
    AppState.activeNote = allNotes[allNotes.length - 1];
    this.saveNotes();
  }

  deleteNote(noteId) {
    const allNotes = AppState.notes;
    const noteIndex = allNotes.findIndex((note) => note.id === noteId);
    allNotes.splice(noteIndex, 1);
    AppState.activeNote = null;
    this.saveNotes();
  }

  setActiveNote(noteId) {
    const actualNotes = AppState.notes;
    const foundNote = actualNotes.find((note) => note.id === noteId);
    AppState.activeNote = foundNote;
  }

  saveNotes() {
    saveState('notes', AppState.notes);
  }

  loadNotes() {
    const notesFromLocalStorage = loadState('notes', [Note]);
    AppState.notes = notesFromLocalStorage;
  }
}

export const notesService = new NotesService();
