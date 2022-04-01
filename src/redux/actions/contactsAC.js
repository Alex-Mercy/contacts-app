import axios from 'axios';

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});



export const apiSetContacts = (contacts) => (dispatch) => {
    axios.get(`http://localhost:3001/contacts`)
        .then(({ data }) => {
            dispatch(setContacts(data));
        });
}


export const apiAddNewContact = contactObj => {
    return (dispatch) => {
        axios.post('http://localhost:3001/contacts', contactObj)
        .then(response => {
            dispatch({
                type: 'ADD_NEW_CONTACT',
                payload: response.data
            }) 
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const apiDeleteContact = (id) => (dispatch) => {
    axios.delete(`http://localhost:3001/contacts/17`)
    .then(response => {
        console.log(response.data)
        dispatch({
            type: 'DELETE_CONTACT',
            payload: response.data
        }) 
    }).catch(error => {
        console.log(error);
    });
}


export const setContacts = (contacts) => ({
    type: 'SET_CONTACTS',
    payload: contacts,
});




