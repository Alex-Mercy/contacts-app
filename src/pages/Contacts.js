import React, { useEffect } from 'react'
import { useSelector, useDispatch, } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { IconButton, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import { onSetContacts, onAddNewContact, deleteContact, onEditContact } from '../store/contacts/contactsActions';
import ContactsData from '../components/ContactsData';
import ContactEditMode from '../components/ContactEditMode';

const useStyles = makeStyles((theme) => ({
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
    const auth = useSelector((state) => state.auth);

    const [inputText, setInputText] = React.useState({
        id: "",
        name: "",
        phone: "",
        image: ""
    })

    const [editMode, setEditMode] = React.useState(false)

    useEffect(() => {
        dispatch(onSetContacts(contacts));
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputText(() => {
            return {
                ...inputText,
                [name]: value
            }
        })
    }

    const onClickAddNewContact = () => {
        dispatch(onAddNewContact(inputText))
        setInputText({
            id: "",
            name: "",
            phone: "",
            image: ""
        });
    }

    const onClickEnableEditMode = (id) => {
        setEditMode(true)
        const selectedContact = contacts.find(contact => contact.id === id)
        setInputText(selectedContact)
    }

    const onClickUpdateContact = () => {
        dispatch(onEditContact(inputText))
        setEditMode(false)
        setInputText({
            id: "",
            name: "",
            phone: "",
            image: ""
        });
    }

    const onClickDeleteContact = (id) => {
        dispatch(deleteContact(id))
    }

    if (!auth.currentUser)
        return <Navigate to="/login" />
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item xs={12}>
                {editMode ?
                    <ContactEditMode
                        inputText={inputText}
                        handleChange={handleChange}
                        updateContact={onClickUpdateContact}
                    />
                    : <ContactsData
                        contacts={contacts}
                        deleteContact={onClickDeleteContact}
                        enableEditMode={onClickEnableEditMode}
                    />
                }
            </Grid>
            <Grid item>
                {!editMode &&
                    <form className={classes.form} noValidate autoComplete="off">
                        <TextField onChange={handleChange} name="image" label="Link to avatar" value={inputText.image} />
                        <TextField onChange={handleChange} name="name" label="Name" value={inputText.name} />
                        <TextField onChange={handleChange} name="phone" label="Phone" value={inputText.phone} />
                        <IconButton onClick={onClickAddNewContact} className={classes.input} color="primary" aria-label="adNew">
                            <AddCircleOutlineIcon />
                        </IconButton>
                    </form>
                }
            </Grid>
            <Grid item>
            </Grid>
        </Grid>
    );
}