import { chartApi } from '../../api/api';
import { chartActionTypes } from './actionTypes';

const getDataAction = (data) => ({
    type: chartActionTypes.getData,
    payload: data
});

export const getData = () => {
    return async (dispatch) => {
        const data = await chartApi.getCoordinates();
        dispatch(getDataAction(data));
    }
};