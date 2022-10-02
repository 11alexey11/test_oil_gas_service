import { customizeTableData } from '../../utils/customizeTableData';
import { tableActionTypes } from './actionTypes';

const initialState = {
    persons: [],
    errorMessage: null
};

export const tableReducer = (state = initialState, action) => {
    switch(action.type) {
        case tableActionTypes.getPersons: {
            return {
                ...state,
                persons: customizeTableData([ ...state.persons, ...action.payload.data ]),
                errorMessage: action.payload.errorMessage
            }
        }
        case tableActionTypes.clearPersons: {
            return {
                ...state,
                persons: [],
                errorMessage: null
            }
        }
        default: {
            return state;
        }
    }
};