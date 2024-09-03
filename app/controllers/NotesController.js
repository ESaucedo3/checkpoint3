import {AppState} from '../AppState.js';
import {Note} from '../models/Note.js';
import {notesService} from '../services/NotesService.js';
import {getFormData} from '../utils/FormHandler.js';
import {Pop} from '../utils/Pop.js';
import {setHTML} from '../utils/Writer.js';

export class NotesController {
  constructor() {
    AppState.on('notes', this.drawNotes);
    AppState.on('activeNote', this.drawActiveNote);
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
    if (!actualNote) {
      setHTML('active-note', Note.NoActiveNoteTemplate);
      return;
    }
    setHTML('active-note', actualNote.ActiveNoteTemplate);
  }

  createNote() {
    event.preventDefault();
    const noteForm = event.target;
    const noteFormData = getFormData(noteForm);
    notesService.createNote(noteFormData);
    // @ts-ignore
    noteForm.reset();
    document.getElementById('body').focus();
    Pop.toast('Note Created!', 'success');
  }

  setActiveNote(noteId) {
    notesService.setActiveNote(noteId);
  }

  deleteNote(noteId) {
    if (!window.confirm('Want to delete the note?')) return;
    notesService.deleteNote(noteId);
    Pop.toast('Note Deleted!', 'success');
  }

  updateNote() {
    // @ts-ignore
    const textAreaElem = document.getElementById('body').value;
    notesService.updateNote(textAreaElem);
    Pop.toast('Note Updated', 'info');
  }
}
