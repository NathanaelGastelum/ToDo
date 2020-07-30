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
        <CardviewComponent></CardviewComponent>
        <EditorComponent></EditorComponent>
      </div>
    );
  }

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
}

export default App;
