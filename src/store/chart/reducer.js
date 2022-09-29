import { validateChartData } from '../../utils/validateChartData';
import { chartActionTypes } from './actionTypes';

const initialState = {
    data: [],
    errorMessage: ''
};

export const chartReducer = (state = initialState, action) => {
    switch(action.type) {
        case chartActionTypes.getData: {
            const data = action.payload.data;
            const validateData = validateChartData(data);
            return {
                ...state,
                data: [...state.data, ...validateData],
                errorMessage: action.payload.errorMessage
            }
        }
        default: {
            return state;
        }
    }
};