import { tableActionTypes } from './actionTypes';

const initialState = {
    persons: [],
    errorMessage: ''
};

export const tableReducer = (state = initialState, action) => {
    switch(action.type) {
        case tableActionTypes.getPersons: {
            return {
                ...state,
                persons: [ ...state.persons, ...action.payload.data ],
                errorMessage: action.payload.errorMessage
            }
        }
        default: {
            return state;
        }
    }
};