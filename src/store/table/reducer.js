import { tableActionTypes } from './actionTypes';

const initialState = {
    persons: []
};

export const tableReducer = (state = initialState, action) => {
    switch(action.type) {
        case tableActionTypes.getPersons: {
            return {
                ...state,
                persons: [ ...state.persons, ...action.payload ]
            }
        }
        default: {
            return state;
        }
    }
};