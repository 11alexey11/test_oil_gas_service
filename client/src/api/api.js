import * as axios from 'axios';

import { fakePersonsUrl } from '../constants/urls';

export const personsApi = {
    getPersons(queryCount) {
        return axios.get(`${fakePersonsUrl}?count=${queryCount}`)
            .then((response) => ({ data: response.data, errorMessage: '' }))
            .catch((err) => ({ data: [], errorMessage: err.message }));
    }
}

export const chartApi = {
    getCoordinates() {
        return axios.post(fakePersonsUrl, chartBody)
            .then((response) => ({ data: response.data, errorMessage: '' }))
            .catch((err) => ({ data: [], errorMessage: err.message }));
    }
}