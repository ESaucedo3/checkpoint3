import {generateId} from '../utils/GenerateId.js';

export class Note {
  constructor(data) {
    this.id = data.id || generateId();
    this.title = data.title;
    this.color = data.color;
    this.body = data.body || '';
    // NOTE Although new notes will recieve a new date, existing notes cannot
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  get NotesTemplate() {
    return `<div class="note-style border-2 p-2 mb-2" style="border-color: ${this.color};">
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

  get ActiveNoteTemplate() {
    return `<div class="row justify-content-center">
                <div class="col-10 py-3">
                  <div class="row text-light">
                    <div class="col-6 position-relative">
                      <i class="fa-solid fa-bookmark fa-2xl position-absolute bookmark" style="color: #63e6be"></i>
                      <h4>CSS Tricks</h4>
                      <p class="m-0">Created on: 06/04/23</p>
                      <p>Last Updated on: Wednesday 6/8/23 10:43am</p>
                    </div>

                    <div class="col-6 d-flex justify-content-end align-items-end mb-2">
                      <button class="btn btn-outline-danger rounded px-2 align-self-end"><i class="fa-solid fa-trash" style="color: #d70000"></i> Delete</button>
                      <button class="btn btn-outline-primary rounded px-2 align-self-end ms-3"><i class="fa-solid fa-floppy-disk" style="color: #74c0fc"></i> Save</button>
                    </div>

                    <textarea class="form-control border border-2 border-primary bg-dark text-light" name="body" rows="19"></textarea>
                  </div>
                </div>
              </div>`;
  }

  get NoActiveNoteTemplate() {
    return `<div class="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center             align-items-center">
                <img class="notes-img" src="assets/img/notes-img.png" alt="" />
                <h3 class="text-light">Create or select a jot to start jotting</h3>
              </div>`;
  }
}
