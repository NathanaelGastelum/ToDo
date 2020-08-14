import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Card from '@material-ui/core/Card';
import ListItem from '@material-ui/core/ListItem';
import CardContent from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';

class CarditemComponent extends React.Component {
    
    render() {

        const { _index, _note, classes, selectedNoteIndex } = this.props;

        return(
            <div key={_index}>
                <Card variant='outlined'
                className={classes.ListItem}
                selected={selectedNoteIndex === _index}
                className={classes.textSection}
                onClick={() => this.selectNote(_note, _index)}>
                    <CardContent
                        //TODO: Change card contents to list elements with checkboxes
                        primary={_note.title}
                        //TODO: Only show elipses if substring longer than displayed
                        secondary={this.removeHTMLTags(_note.body.substring(0,30)) + '...'}
                    ></CardContent>

                    <DeleteIcon onClick={() => this.deleteNote(_note)}
                    className={classes.deleteIcon}></DeleteIcon>
                </Card>
            </div>
        );
    }

    removeHTMLTags = (str) => {
        return str.replace(/<[^>]*>?/gm, '');
    }

    selectNote = (n, i) => this.props.selectNote(n, i);
    deleteNote = (note) => {
        if(window.confirm(`Are you sure you want to delete: ${note.title}`)) {
            this.props.deleteNote(note);
        }
    }

}

export default withStyles(styles)(CarditemComponent);