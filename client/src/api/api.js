import * as axios from 'axios';

import { fakePersonsUrl } from '../constants/urls';

export const personsApi = {
    getPersons(queryCount) {
        return axios.get(`${fakePersonsUrl}?count=${queryCount}`)
            .then((response) => response.data)
            .catch((err) => ({ data: [], errorMessage: err.response.data.errorMessage }));
    }
}

export const chartApi = {
    getCoordinates() {
        return axios.post(fakePersonsUrl)
            .then((response) => response.data)
            .catch((err) => ({ data: [], errorMessage: err.response.data.errorMessage }));
    }
}