import React from 'react';
import CardviewComponent from './cardview/cardview'
import EditorComponent from './editor/editor'
import './App.css';

const firebase = require('firebase');

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedCardIndex: null,
      selectedCard: null,
      cards: null
    };
  }

  render() {
    return(
      <div className="app-container">
        <CardviewComponent 
          selectedCardIndex={this.state.selectedCardIndex}
          cards={this.state.cards}
          deleteCard={this.deleteCard}
          selectCard={this.selectCard}
          newCard={this.newCard}>
        </CardviewComponent>
        {
          this.state.selectedCard ?
          <EditorComponent selectedCard={this.state.selectedCard}
          selectedCardIndex={this.state.selectedCardIndex}
          cards={this.state.cards}
          cardUpdate={this.cardUpdate}></EditorComponent> :
          null
        }
      </div>
    );
  }

  // Retrieves data from firebase
  componentDidMount = () => {
    firebase.firestore().collection('cards').onSnapshot(serverUpdate => {
      const cards = serverUpdate.docs.map(doc => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      });
      this.setState({ cards: cards });
    });
  }

  selectCard = (card, index) => this.setState({ selectedCardIndex: index, selectedCard: card });

  cardUpdate = (id, cardObj) => {
    firebase.firestore().collection('cards').doc(id).update({
      title: cardObj.title,
      body: cardObj.body,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  newCard = async (title) => {
    const card = {
      title: title,
      body: ''
    };
    const newFromDB = await firebase.firestore().collection('cards').add({
      title: card.title,
      body: card.body,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    const newID = newFromDB.id;
    await this.setState({ cards: [...this.state.cards, card] });
    const newCardIndex = this.state.cards.indexOf(this.state.cards.filter(_card => _card.id === newID)[0]);
    this.setState({ selectedCard: this.state.cards[newCardIndex], selectedCardIndex: newCardIndex });
  } 

  deleteCard = async (card) => {
    const deletedCardIndex = this.state.cards.indexOf(card);
    await this.setState({ cards: this.state.cards.filter(_card => _card !== card) });

    if(this.state.selectedCardIndex === deletedCardIndex) {
      this.setState({ selectedCardIndex: null, selectedCard: null });
    } else {
      if(this.state.cards.length > 0) {
        this.state.selectedCardIndex < deletedCardIndex ?
        this.selectCard(this.state.cards[this.state.selectedCardIndex], this.state.selectedCardIndex) :
          this.selectCard(this.state.cards[this.state.selectedCardIndex - 1], this.state.selectedCardIndex - 1);
      } else {
        this.setState({ selectedCardIndex: null, selectedCard: null });
      }
    }

    firebase.firestore().collection('cards').doc(card.id).delete();
  }
}

export default App;