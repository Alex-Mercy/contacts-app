import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';

import contactsReducer from'./reducers/contactsReducer';
import authReducer from'./auth/authReducer';
import rootSaga from './rootSaga';
const sagaMiddleware = createSagaMiddleware();


const rootReducer = combineReducers({
    contacts: contactsReducer,
    auth: authReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);



export default store;