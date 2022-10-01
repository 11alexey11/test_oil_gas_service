import { chartApi } from '../../api/api';
import { queryCount } from '../../constants/urls';
import { chartActionTypes } from './actionTypes';

const getDataAction = (data) => ({
    type: chartActionTypes.getData,
    payload: data
});

export const getData = () => {
    return async (dispatch) => {
        const response = await chartApi.getCoordinates(queryCount);
        console.log(response);
        dispatch(getDataAction(response));
    }
};