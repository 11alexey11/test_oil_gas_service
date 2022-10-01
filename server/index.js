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
                duration: faker.datatype.number({ min: 20, max: 100, precision: 0.01 }),
                isNamePic: faker.datatype.boolean()
            }
        }),
        errorMessage: null
    })
});

app.get('/coordinates', (req, res) => {
    // получение query из запроса
    const count = req.query.count;

    // в случае если нет count, то ошибка
    if (!count) {
        return res
            .status(400)
            .send({ errorMessage: 'Missing query parameter' })
    }
    const data = {
        data: {
            date: faker.date.past(),
            hour: faker.datatype.number(0, 23),
            av: _.times(count, () => faker.datatype.number({ min: -40, max: 40 })),
            bv: _.times(count, () => faker.datatype.number({ min: -40, max: 40 })),
            cv: _.times(count, () => faker.datatype.number({ min: -40, max: 40 })),
            dv: _.times(count, () => faker.datatype.number({ min: -40, max: 40 })),
            ev: _.times(count, () => faker.datatype.number({ min: -40, max: 40 })),
            fv: _.times(count, () => faker.datatype.number({ min: -40, max: 40 })),
            gv: _.times(count, () => faker.datatype.number({ min: -40, max: 40 })),
        },
        errorMessage: null
    }

    res.send(data);
});

app.listen(5050, () => {
    console.log('Server started')
});
