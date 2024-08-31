import {AppState} from '../AppState.js';
import {Note} from '../models/Note.js';
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

  drawActiveNote() {
    const actualNote = AppState.activeNote;
    setHTML('active-note', actualNote.ActiveNoteTemplate);
  }

  createNote() {
    event.preventDefault();
    const noteForm = event.target;
    const noteFormData = getFormData(noteForm);
    notesService.createNote(noteFormData);
    const activeNoteElem = document.getElementById('active-note');
    activeNoteElem.innerHTML = '';
    this.drawActiveNote();
  }

  setActiveNote(noteId) {
    notesService.setActiveNote(noteId);
    this.drawActiveNote();
  }

  deleteNote(noteId) {
    notesService.deleteNote(noteId);
    const activeNoteElem = document.getElementById('active-note');
    activeNoteElem.innerHTML = '';
    activeNoteElem.innerHTML += Note.NoActiveNoteTemplate;
  }

  updateNote() {
    event.preventDefault();
    const form = event.target;
    const textAreaElem = form.body.value;
    notesService.updateNote(textAreaElem);
  }
}
