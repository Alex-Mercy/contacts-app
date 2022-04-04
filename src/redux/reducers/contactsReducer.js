
const initialState = {
    items: [],
    isLoaded: false,
    searchValue: ''
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CONTACTS":
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            };
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            };
        case 'ADD_NEW_CONTACT':
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case 'DELETE_CONTACT':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case 'UPDATE_CONTACT':
            return {
                ...state,
                items: state.items.map(item => item.id === action.payload.id ?
                    action.payload :
                    item
                )
            };
        case 'SEARCH_VALUE':
            return {
                ...state,
                searchValue: action.payload,
            };


        default:
            return state;
    }
}


export default contactsReducer;