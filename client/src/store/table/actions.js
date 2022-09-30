import { personsApi } from '../../api/api';
import { queryCount } from '../../constants/urls';
import { tableActionTypes } from "./actionTypes";

const getPersonsAction = (persons) => ({
    type: tableActionTypes.getPersons,
    payload: persons
});

export const getPersons = () => {
    return async (dispatch) => {
        const response = await personsApi.getPersons(queryCount);
        dispatch(getPersonsAction(response));
    }
};