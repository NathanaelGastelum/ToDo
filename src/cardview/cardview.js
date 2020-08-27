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
            addingNote: false,
            title: null
        };
    }
    render() {
        //TODO: rename notes to cards in firebase
        const { notes, classes, selectedNoteIndex } = this.props;

        if(notes) {
            return(
                <div className={classes.cardviewContainer}>
                    <Button
                        onClick={this.newNoteBtnClick}
                        className={classes.newNoteBtn}>{this.state.addingNote ? 'Cancel' : 'New Note'}</Button>
                        {
                            this.state.addingNote ?
                            <div>
                                <input type='text'
                                    className={classes.newNoteInput}
                                    placeholder='Title'
                                    onKeyUp={(e) => this.updateTitle(e.target.value)}>
                                </input>
                                <Button 
                                    className={classes.newNoteSubmitBtn}
                                    onClick={this.newNote}>Submit</Button>
                            </div> :
                            null
                        }
                        <List>
                            {
                                notes.map((_note, _index, listItems) => {
                                    return(
                                        <div key={_index}>
                                            <CarditemComponent
                                                _note={_note}
                                                _index={_index}
                                                selectedNoteIndex={selectedNoteIndex}
                                                selectNote={this.selectNote}
                                                deleteNote={this.deleteNote}>
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

    newNoteBtnClick = () => {
        this.setState({ title: null, addingNote: !this.state.addingNote });
    }
    updateTitle = (txt) => {
        this.setState({ title: txt });
    }
    newNote = () => {
        this.props.newNote(this.state.title);
        this.setState({ title: null, addingNote: false });
    }
    selectNote = (n, i) => this.props.selectNote(n, i);
    deleteNote = (note) => this.props.deleteNote(note);
}

export default withStyles(styles)(CardviewComponent);