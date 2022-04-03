import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        margin: 10,
        width: '100%',
    },
    text: {
        minWidth: '432px',
        paddingTop: 9.3
    }
}));

function ContactsData({ contacts, deleteContact, enableEditMode }) {
    const classes = useStyles();

debugger;
    return (
        <List dense className={classes.root}>
            {contacts.map((contact) => {
                return (
                    <ListItem key={contact.id} button  >
                        <ListItemAvatar>
                            <Avatar
                                alt={`Avatar n°${contact.id}`}
                                onClick={() => { enableEditMode(contact.id) }}
                                src={contact.image}
                                id={contact.id}
                            />
                        </ListItemAvatar>
                        <ListItemText className={classes.text} id={contact.id}
                            onClick={() => { enableEditMode(contact.id) }}
                            primary={contact.name}
                            secondary={contact.phone} />

                        <IconButton
                            onClick={() => { enableEditMode(contact.id) }}
                            color="primary"
                            edge="end"
                            aria-label="edit"
                        >
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => { deleteContact(contact.id) }} color="secondary" edge="end" aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                );
            })}
        </List>
    )
}

export default ContactsData