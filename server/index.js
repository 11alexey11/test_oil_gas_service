const express = require('express');
const { faker }= require('@faker-js/faker');
const _ = require('lodash');

const app = express();

faker.locale = 'ru';

app.get('/persons', (req, res) => {
    const count = req.query.count;

    if (!count) {
        return res
            .status(400)
            .send({ errorMessage: 'Missing query parameter' })
    }

    res.send(
        _.times(count, () => {
            const gender = faker.name.sex();
            return {
                id: faker.datatype.uuid(),
                name: faker.name.fullName({ sex: gender }),
                gender: gender,
                city: faker.address.cityName(),
                age: faker.datatype.number({ min: 14, max: 60 }),
                duration: faker.datatype.number({ min: 20, max: 100, precision: 0.01 })
            }
        })
    )
});

app.listen(5050, () => {
    console.log('Server started')
});
