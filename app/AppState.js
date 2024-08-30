import {Note} from './models/Note.js';
import {EventEmitter} from './utils/EventEmitter.js';
import {createObservableProxy} from './utils/ObservableProxy.js';

class ObservableAppState extends EventEmitter {
  notes = [
    new Note({title: 'CSS Tricks', color: '#333', body: 'CSS is very cool although there are times it can be headache to work with mostly height & images'}),
    new Note({title: 'JS Tricks', color: '#333', body: 'You foreach to access items within array and so much more'}),
    new Note({title: 'C# Stuff', color: '#333', body: 'Not sure what to say yet'}),
  ];
}

export const AppState = createObservableProxy(new ObservableAppState());
