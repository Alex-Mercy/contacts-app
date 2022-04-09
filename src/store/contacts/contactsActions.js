import types from './contactsActionTypes';

export const setContacts = (contacts) => ({
    type: types.SET_CONTACTS,
    payload: contacts,
});

export const onSetContacts = () => ({
    type: types.ON_SET_CONTACTS,
});

export const addNewContact = (response) => ({
    type: types.ADD_NEW_CONTACT,
    payload: response.data,
});

export const onAddNewContact = (contactObj) => ({
    type: types.ON_ADD_NEW_CONTACT,
    payload: contactObj,
});

export const deleteContact = (id) => ({
    type: types.DELETE_CONTACT,
    payload: id,
});

export const updateContact = (response) => ({
    type: types.UPDATE_CONTACT,
    payload: response.data,
});

export const onEditContact = (contactObj) => ({
    type: types.ON_EDIT_CONTACT,
    payload: contactObj
});

export const contactsFailure = (error) => ({
    type: types.CONTACTS_IN_FAILURE,
    payload: error,
  });

export const addSearchValue = (value) => ({
    type: types.SEARCH_VALUE,
    payload: value,
});
















