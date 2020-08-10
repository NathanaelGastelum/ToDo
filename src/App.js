import React from 'react';
import CardviewComponent from './cardview/cardview'
import EditorComponent from './editor/editor'
import './App.css';

const firebase = require('firebase');

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    };
  }

  render() {
    return(
      <div className="app-container">
        <CardviewComponent 
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
          newNote={this.newNote}
          ></CardviewComponent>
        {
          this.state.selectedNote ?
          <EditorComponent selectedNote={this.state.selectedNote}
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          noteUpdate={this.noteUpdate}></EditorComponent> :
          null
        }
      </div>
    );
  }

  // Retrieves data from firebase
  componentDidMount = () => {
    firebase.firestore().collection('notes').onSnapshot(serverUpdate => {
      const notes = serverUpdate.docs.map(doc => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      });
      console.log(notes); //TODO: remove when not needed
      this.setState({ notes: notes });
    });
  }

  selectNote = (note, index) => this.setState({ selectedNoteIndex: index, selectedNote: note });

  noteUpdate = (id, noteObj) => {
    firebase.firestore().collection('notes').doc(id).update({
      title: noteObj.title,
      body: noteObj.body,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  newNote = async (title) => {
    const note = {
      title: title,
      body: ''
    };
    const newFromDB = await firebase.firestore().collection('notes').add({
      title: note.title,
      body: note.body,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    const newID = newFromDB.id;
    await this.setState({ notes: [...this.state.notes, note] });
    const newNoteIndex = this.state.notes.indexOf(this.state.notes.filter(_note => _note.id === newID)[0]);
    this.setState({ selectedNote: this.state.notes[newNoteIndex], selectedNoteIndex: newNoteIndex });
  } 

  deleteNote = async (note) => {
    const deletedNoteIndex = this.state.notes.indexOf(note);
    await this.setState({ notes: this.state.notes.filter(_note => _note !== note) });

    if(this.state.selectedNoteIndex === deletedNoteIndex) {
      this.setState({ selectedNoteIndex: null, selectedNote: null });
    } else {
      if(this.state.notes.length > 0) {
        this.state.selectedNoteIndex < deletedNoteIndex ?
        this.selectNote(this.state.notes[this.state.selectedNoteIndex], this.state.selectedNoteIndex) :
          this.selectNote(this.state.notes[this.state.selectedNoteIndex - 1], this.state.selectedNoteIndex - 1);
      } else {
        this.setState({ selectedNoteIndex: null, selectedNote: null });
      }
    }

    firebase.firestore().collection('notes').doc(note.id).delete();
  }
}

export default App;
