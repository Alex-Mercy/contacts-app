import React, { useEffect } from 'react'
import { useSelector, useDispatch, } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { IconButton, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import { apiSetContacts, apiAddNewContact, apiDeleteContact, apiUpdateContact } from '../redux/actions/contactsAC';
import ContactsData from '../components/ContactsData';
import ContactsDataForm from '../components/ContactsDataForm';

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

    const [inputText, setInputText] = React.useState({
        id: "",
        name: "",
        phone: "",
        image: ""
    })

    const [editMode, setEditMode] = React.useState(false)

    useEffect(() => {
        dispatch(apiSetContacts(contacts));
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target
        setInputText(() => {
            return {
                ...inputText,
                [name]: value
            }
        })
    }

    const onClickAddNewContact = () => {
        dispatch(apiAddNewContact(inputText))
        setInputText({
            id: "",
            name: "",
            phone: "",
            image: ""
        });
    }

    const onClickEnableEditMode = (id) => {
        setEditMode(true)
        const selectedContact = contacts.find(contact => contact.id == id)
        setInputText(selectedContact)
    }

    const onClickUpdateContact = () => {
        dispatch(apiUpdateContact(inputText))
        console.log(inputText);
        // setEditMode(false)
    }

    const onClickDeleteContact = (id) => {
        dispatch(apiDeleteContact(id))
    }

    return (
        <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item xs={12}>
                {editMode ?
                    <ContactsDataForm
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
