import { all } from 'redux-saga/effects';

import { authSagas } from './auth/authSagas';
import { contactsSagas } from './contacts/contactsSagas';


export default function* rootSaga() {
  yield all([
    authSagas(),
    contactsSagas(),
  ]);
}

