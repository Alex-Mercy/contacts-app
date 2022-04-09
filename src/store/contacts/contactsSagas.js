import { all, call, put, takeLatest } from 'redux-saga/effects';

import { setContacts, addNewContact, updateContact, contactsFailure } from './contactsActions';
import { getContacts, postNewContact, putContact, apiDeleteContact, } from '../api';
import types from './contactsActionTypes';


export function* setContactsSaga() {
  try {
    const response = yield call(getContacts);
    yield put(setContacts(response.data))
  } catch (error) {
    yield put(contactsFailure(error));
  }
}

export function* addNewContactSaga({ payload: contactObj }) {
  try {
    const response = yield postNewContact(contactObj);
    yield put(addNewContact(response))
  } catch (error) {
    yield put(contactsFailure(error));
  }
}

export function* deleteContactSaga({ payload: id }) {
  try {
    yield apiDeleteContact(id);
  } catch (error) {
    yield put(contactsFailure(error));
  }
}


export function* editContactSaga({ payload: contactObj }) {
  try {
    const response = yield putContact(contactObj);
    yield put(updateContact(response))
  } catch (error) {
    yield put(contactsFailure(error));
  }
}

export function* onsetContacts() {
  yield takeLatest(types.ON_SET_CONTACTS, setContactsSaga);
}

export function* onAddnewContact() {
  yield takeLatest(types.ON_ADD_NEW_CONTACT, addNewContactSaga);
}

export function* onDeleteContact() {
  yield takeLatest(types.DELETE_CONTACT, deleteContactSaga);
}

export function* onEditContact() {
  yield takeLatest(types.ON_EDIT_CONTACT, editContactSaga);
}



export function* contactsSagas() {
  yield all([
    call(onsetContacts),
    call(onAddnewContact),
    call(onDeleteContact),
    call(onEditContact),
  ]);
}