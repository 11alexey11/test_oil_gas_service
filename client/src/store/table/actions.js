import { personsApi } from '../../api/api';
import { tableActionTypes } from "./actionTypes";

const getPersonsAction = (persons) => ({
    type: tableActionTypes.getPersons,
    payload: persons
});

export const getPersons = () => {
    return async (dispatch) => {
        const response = await personsApi.getPersons();
        dispatch(getPersonsAction(response));
    }
};