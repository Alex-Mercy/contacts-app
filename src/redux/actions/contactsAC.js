import axios from 'axios';

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const setContacts = (contacts) => ({
    type: 'SET_CONTACTS',
    payload: contacts,
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

export const apiUpdateContact = contactObj => {
    return (dispatch) => {
        axios.put('http://localhost:3001/contacts/9', contactObj)
        .then(response => {
            console.log(response.data);
            dispatch({
                type: 'UPDATE_CONTACT',
                payload: response.data
            }) 
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const apiDeleteContact = (id) => (dispatch) => {
    axios.delete(`http://localhost:3001/contacts/${id}`)
    .then(response => {
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        }) 
    }).catch(error => {
        console.log(error);
    });
}





