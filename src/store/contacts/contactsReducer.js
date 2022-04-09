import types from './contactsActionTypes';

const initialState = {
    items: [],
    searchValue: '',
    error: null,
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CONTACTS:
            return {
                ...state,
                items: action.payload,
            };
        case types.SET_LOADED:
            return {
                ...state,
                isLoaded: action.payload,
            };
        case types.ADD_NEW_CONTACT:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case types.DELETE_CONTACT:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case types.UPDATE_CONTACT:
            return {
                ...state,
                items: state.items.map(item => item.id === action.payload.id ?
                    action.payload :
                    item
                )
            };
        case types.CONTACTS_IN_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case types.SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload,
            };


        default:
            return state;
    }
}


export default contactsReducer;