import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import CarditemComponent from '../carditem/carditem';

class CardviewComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            addingCard: false,
            title: null
        };
    }
    render() {
        const { cards, classes, selectedCardIndex } = this.props;

        if(cards) {
            return(
                <div>
                    <Button
                        onClick={this.newCardBtnClick}
                        className={classes.newCardBtn}>{this.state.addingCard ? 'Cancel' : 'New Card'}</Button>
                        {
                            this.state.addingCard ?
                            <div>
                                <input type='text'
                                    className={classes.newCardInput}
                                    placeholder='Title'
                                    onKeyUp={(e) => this.updateTitle(e.target.value)}>
                                </input>
                                <Button 
                                    className={classes.newCardSubmitBtn}
                                    onClick={this.newCard}>Submit</Button>
                            </div> :
                            null
                        }
                        <List className={classes.cardviewContainer}>
                            {
                                cards.map((_card, _index, listItems) => {
                                    return(
                                        <div key={_index}>
                                            <CarditemComponent
                                                _card={_card}
                                                _index={_index}
                                                selectedCardIndex={selectedCardIndex}
                                                selectCard={this.selectCard}
                                                deleteCard={this.deleteCard}>
                                            </CarditemComponent>
                                        </div>
                                    )
                                })
                            }
                        </List>
                </div>);
        } else {
            return(<div></div>);
        }
    }

    newCardBtnClick = () => {
        this.setState({ title: null, addingCard: !this.state.addingCard });
    }
    updateTitle = (txt) => {
        this.setState({ title: txt });
    }
    newCard = () => {
        this.props.newCard(this.state.title);
        this.setState({ title: null, addingCard: false });
    }
    selectCard = (c, i) => this.props.selectCard(c, i);
    deleteCard = (card) => this.props.deleteCard(card);
}

export default withStyles(styles)(CardviewComponent);