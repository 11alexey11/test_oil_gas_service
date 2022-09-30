const express = require('express');
const cors = require('cors');
const { faker }= require('@faker-js/faker');
const _ = require('lodash');

const app = express();

app.use(cors());

faker.locale = 'ru';

app.get('/persons', (req, res) => {
    // получение query из запроса
    const count = req.query.count;

    // в случае если нет count, то ошибка
    if (!count) {
        return res
            .status(400)
            .send({ errorMessage: 'Missing query parameter' })
    }
    // генерация фейковых данных для таблицы в зависимости от кол-ва (возвращает массив)

    res.send({
        data: _.times(count, () => {
            const gender = faker.name.sex();
            return {
                id: faker.datatype.uuid(),
                name: faker.name.fullName({ sex: gender }),
                gender: gender,
                city: faker.address.cityName(),
                age: faker.datatype.number({ min: 14, max: 60 }),
                duration: faker.datatype.number({ min: 20, max: 100, precision: 0.01 })
            }
        }),
        errorMessage: null
    })
});

app.listen(5050, () => {
    console.log('Server started')
});
