import {AppState} from '../AppState.js';
import {Note} from '../models/Note.js';
import {notesService} from '../services/NotesService.js';
import {getFormData} from '../utils/FormHandler.js';
import {Pop} from '../utils/Pop.js';
import {setHTML} from '../utils/Writer.js';

export class NotesController {
  constructor() {
    AppState.on('notes', this.drawNotes);
    notesService.loadNotes();
  }

  drawNotes() {
    const allNotes = AppState.notes;
    let noteCount = document.getElementById('note-count');
    noteCount.textContent = `Add a Jot | ${allNotes.length} Jots`;
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
    // @ts-ignore
    noteForm.reset();
    document.getElementById('body').focus();
    Pop.toast('Note Created!', 'success');
  }

  setActiveNote(noteId) {
    notesService.setActiveNote(noteId);
    this.drawActiveNote();
  }

  deleteNote(noteId) {
    if (!window.confirm('Want to delete the note?')) return;
    notesService.deleteNote(noteId);
    const activeNoteElem = document.getElementById('active-note');
    activeNoteElem.innerHTML = '';
    activeNoteElem.innerHTML += Note.NoActiveNoteTemplate;
    Pop.toast('Note Deleted!', 'success');
  }

  updateNote() {
    // @ts-ignore
    const textAreaElem = document.getElementById('body').value;
    notesService.updateNote(textAreaElem);
    const activeNoteElem = document.getElementById('active-note');
    activeNoteElem.innerHTML = '';
    this.drawActiveNote();
  }
}
