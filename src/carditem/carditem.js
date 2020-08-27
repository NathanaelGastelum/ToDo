import React from 'react';
import styles from './styles';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import CardContent from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';

export default function CarditemComponent(props) {
    const classes = styles;
    const { _index, _card, selectedCardIndex } = props;
    const [checked, setChecked] = React.useState([0]);
    
    const removeHTMLTags = (str) => {
        return str.replace(/<[^>]*>?/gm, '');
    }
    const selectCard = (n, i) => props.selectCard(n, i);
    const deleteCard = (card) => {
        if(window.confirm(`Are you sure you want to delete: ${card.title}`)) {
            props.deleteCard(card);
        }
    }
    //FIXME: app crashes when checkbox is clicked 
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }
    
        setChecked(newChecked);
    }

    if(_card.listItems) {
        return(
            <div key={_index}>
                <Card variant='outlined'
                className={classes.listItem}
                selected={selectedCardIndex === _index}
                onClick={() => selectCard(_card, _index)}>
                    <CardContent
                        //TODO: Use virtualized list for better performance
                        //TODO: Show elipses for overflow
                    >
                        <List subheader={_card.title} className={classes.carditemContainer}>
                            {_card.listItems.map((_listItem, _index) => {
                                const labelId = `checkbox-list-label-${_index}`;

                                return (
                                    <ListItem key={_index} role={undefined} dense button onClick={handleToggle(_index)}>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={_listItem} />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </CardContent>

                    <DeleteIcon onClick={() => deleteCard(_card)}
                    className={classes.deleteIcon}></DeleteIcon>
                </Card>
            </div>
        );
    } else {
        return(<div></div>);
    }
}