import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import CarditemComponent from '../carditem/carditem';

//TODO Change from sidebar to card view

class CardviewComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(<div>Cardview reporting in</div>);
    }
}

export default withStyles(styles)(CardviewComponent);