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
      console.log(notes);
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

}

export default App;
