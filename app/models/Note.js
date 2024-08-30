import {generateId} from '../utils/GenerateId.js';

export class Note {
  constructor(data) {
    this.id = data.id || generateId();
    this.title = data.title;
    this.color = data.color;
    this.body = data.body;
    // NOTE Although new notes will recieve a new date, existing notes cannot
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  get NotesTemplate() {
    return `<div class="border-start border-2 border-light p-2 mb-2">
                  <div class="row align-items-center">
                    <div class="col-6">
                      <h4>${this.title}</h4>
                    </div>
                    <div class="col-6">
                      <p class="text-end">${this.createdAt.toLocaleDateString()}</p>
                    </div>
                    <div class="col-12">
                      <p>${this.body}</p>
                    </div>
                  </div>
                </div>`;
  }

  get ActiveNoteTemplate() {}

  get NoActiveNoteTemplate() {
    return `<div class="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center             align-items-center">
                <img class="notes-img" src="assets/img/notes-img.png" alt="" />
                <h3 class="text-light">Create or select a jot to start jotting</h3>
              </div>`;
  }
}
