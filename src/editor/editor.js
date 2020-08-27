import React from 'react';
import ReactQuill from 'react-quill';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { debounce } from '@material-ui/core';

//TODO: Make editor a lightbox/modal element

class EditorComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            title: '',
            id: ''
        };
    }   

    componentDidMount = () => {
        this.setState({
            text: this.props.selectedCard.body,
            title: this.props.selectedCard.title,
            id: this.props.selectedCard.id
        });
    }

    componentDidUpdate = () => {
        if(this.props.selectedCard.id !== this.state.id) {
            this.setState({
                text: this.props.selectedCard.body,
                title: this.props.selectedCard.title,
                id: this.props.selectedCard.id
            });
        }
    }

    render() {

        const { classes } = this.props;

        return(
        <div className={classes.editorContainer}>
            <BorderColorIcon className={classes.editIcon}></BorderColorIcon> 
            <input
                className={classes.titleInput}
                placeholder='Card Title'
                value={this.state.title ? this.state.title : ''}
                onChange={(e) => this.updateTitle(e.target.value)}>
            </input>
            <ReactQuill 
                value={this.state.text} 
                onChange={this.updateBody}>
            </ReactQuill>
        </div>);
    }
    updateBody = async (val) => {
        await this.setState({ text: val });
        this.update();
    };
    updateTitle = async (txt) => {
        await this.setState({ title: txt });
        this.update();
    }
    update = debounce(() => {
        this.props.cardUpdate(this.state.id, {
            title: this.state.title,
            body: this.state.text
        })
    }, 1500);
}

export default withStyles(styles)(EditorComponent);