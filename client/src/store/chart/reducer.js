import { validateChartData } from '../../utils/validateChartData';
import { chartActionTypes } from './actionTypes';

const initialState = {
    data: [],
    errorMessage: null
};

export const chartReducer = (state = initialState, action) => {
    switch(action.type) {
        case chartActionTypes.getData: {
            let validateData = [];
            const data = action.payload.data;
            if (!action.payload.errorMessage) {
                validateData = validateChartData(data);
            }
            return {
                ...state,
                data: [...state.data, ...validateData],
                errorMessage: action.payload.errorMessage
            }
        }
        case chartActionTypes.clearData: {
            return {
                ...state,
                data: [],
                errorMessage: null
            }
        }
        default: {
            return state;
        }
    }
};