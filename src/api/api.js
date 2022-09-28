import * as axios from 'axios';

import { fakePersonsUrl } from '../constants/urls';

const { API_TOKEN } = process.env;

const personBody = {
    token: API_TOKEN,
    data: {
        id: "cryptoUUID",
        name: "name",
        gender: "personGender",
        age: "numberInt|14,60",
        city: "addressCity",
        duration: "numberFloat|20,100|2",
        _repeat: 10
    }
    
};

const chartBody = {
    token: API_TOKEN,
    data: {
        date: "dateTime|ISOtime",
        hour: "numberInt|0,23|",
        av: "functionArray|18|numberInt|-40,40",
        bv: "functionArray|18|numberInt|-40,40",
        cv: "functionArray|18|numberInt|-40,40",
        dv: "functionArray|18|numberInt|-40,40",
        ev: "functionArray|18|numberInt|-40,40",
        fv: "functionArray|18|numberInt|-40,40",
        gv: "functionArray|18|numberInt|-40,40",

    }
}

export const personsApi = {
    getPersons() {
        return axios.post(fakePersonsUrl, personBody)
            .then((response) => response.data)
            .catch((err) => err.message);
    }
}

export const chartApi = {
    getCoordinates() {
        return axios.post(fakePersonsUrl, chartBody)
            .then((response) => response.data)
            .catch((err) => err.message);
    }
}