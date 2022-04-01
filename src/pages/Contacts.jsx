import React, { useEffect } from 'react'
import { useSelector, useDispatch, } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Container, IconButton, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import { apiSetContacts, apiAddNewContact, apiDeleteContact } from '../redux/actions/contactsAC';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 10,
        width: '100%',
        maxWidth: '100%',

    },
    form: {
        '& > *': {
            margin: theme.spacing(6, 1.5),
        },
    },


}));

export default function Contacts() {
    const classes = useStyles();

    const dispatch = useDispatch();
    const contacts = useSelector(({ contacts }) => contacts.items);

    const [inputText, setInputText] = React.useState({
        name: "",
        phone: ""
    })

    useEffect(() => {
        dispatch(apiSetContacts(contacts));
    }, []);


    const handleChange = (e) => {
        const { id, value } = e.target
        setInputText(() => {
            return {
                ...inputText,
                [id]: value
            }
        })
    }


    const onClickAddNewContact = (e) => {
        dispatch(apiAddNewContact(inputText))
        setInputText({
            name: "",
            phone: ""
        });
    }

    const handleDeleteContact = (id) => {
        console.log(id);
        
    }

    return (
        <Container component="main" maxWidth="sm" >
            <List dense className={classes.root}>
                {contacts.map((contact) => {
                    return (
                        <ListItem key={contact.id} button >
                            <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar n°${contact.id}`}
                                    src={contact.image}
                                    id={contact.id}
                                />
                            </ListItemAvatar>
                            <ListItemText id={contact.id}
                                primary={contact.name}
                                secondary={contact.phone} />

                            <IconButton color="primary" edge="end" aria-label="edit">
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={handleDeleteContact} color="secondary" edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                    );
                })}
            </List>
            <form className={classes.form} noValidate autoComplete="off">
                <TextField onChange={handleChange} id="name" label="Name" value={inputText.name} />
                <TextField onChange={handleChange} id="phone" label="Phone" value={inputText.phone} />
                <IconButton onClick={onClickAddNewContact} className={classes.input} color="primary" aria-label="adNew">
                    <AddCircleOutlineIcon />
                </IconButton>
            </form>
        </Container>
    );
}
