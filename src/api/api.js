import * as axios from 'axios';

import { fakePersonsUrl } from '../constants/urls';

const { API_TOKEN } = process.env;

const body = {
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

export const personsApi = {
    getPersons() {
        return axios.post(fakePersonsUrl, body).then((response) => response.data);
    }
}