import React from 'react'
import PropTypes from 'prop-types';

import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    form: {
        '& > *': {
            margin: theme.spacing(1.5, 1.5),
        },
    },
    div: {
        padding: ' 50px 10px'
    },
    editButton: {
        margin: '15px 240px'
    }


}));

function ContactEditMode({ updateContact, inputText, handleChange }) {
    const classes = useStyles();
    return (
        <div className={classes.div}>
                    <form className={classes.form} >
                        <TextField onChange={handleChange} name="image" label="Avatar" value={inputText.image} />
                        <TextField onChange={handleChange} name="name" label="Name" value={inputText.name} />
                        <TextField onChange={handleChange} name="phone" label="Phone" value={inputText.phone} />
                    </form>
            <Button
                className={classes.editButton}
                variant="contained"
                color="primary"
                onClick={updateContact}
            >
                Confirm changes
            </Button>
        </div>
    )
}

ContactEditMode.propTypes = {
    inputText: PropTypes.object,
    updateContact: PropTypes.func,
    handleChange: PropTypes.func,    
};

ContactEditMode.defaultProps = {
    inputText: {},
};



export default ContactEditMode