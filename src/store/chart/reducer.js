import { validateChartData } from '../../utils/validateChartData';
import { chartActionTypes } from './actionTypes';

const initialState = {
    data: []
};

export const chartReducer = (state = initialState, action) => {
    switch(action.type) {
        case chartActionTypes.getData: {
            const data = action.payload;
            const validateData = validateChartData(data);
            return {
                ...state,
                data: [...state.data, ...validateData]
            }
        }
        default: {
            return state;
        }
    }
};