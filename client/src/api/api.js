import * as axios from 'axios';

import { fakePersonsUrl } from '../constants/urls';

export const personsApi = {
    getPersons(queryCount) {
        return axios.get(`${fakePersonsUrl}?count=${queryCount}`)
            .then((response) => response.data)
            .catch((err) => {
                if (err.response.data) {
                    return {
                        data: [],
                        errorMessage: err.response.data.errorMessage
                    }
                } else {
                    return {
                        data: [],
                        errorMessage: err.message
                    }
                }
            });
    }
}

export const chartApi = {
    getCoordinates() {
        return axios.post(fakePersonsUrl)
            .then((response) => response.data)
            .catch((err) => {
                if (err.response.data) {
                    return {
                        data: [],
                        errorMessage: err.response.data.errorMessage
                    }
                } else {
                    return {
                        data: [],
                        errorMessage: err.message
                    }
                }
            });
    }
}