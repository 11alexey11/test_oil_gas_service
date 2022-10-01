import * as axios from 'axios';

import { fakeChartUrl, fakePersonsUrl } from '../constants/urls';

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
    getCoordinates(queryCount) {
        return axios.get(`${fakeChartUrl}?count=${queryCount}`)
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