// функция для получения массива времени (hour - начальный час, count - кол-во времени, возвращает массив времен)
export const getTimes = (hour, count) => {
    const minutes = [0, 15, 30, 45];
    let randomNumber = Math.floor(Math.random() * minutes.length);
    let randomElement = minutes[randomNumber];

    const times = [`${hour <= 10 ? `0${hour}` : hour}:${randomElement <= 10 ? `0${randomElement}` : randomElement}:00`];

    for (let i = 0; i < count - 1; i += 1) {
        randomElement += 15;

        if (randomElement % 60 === 0) {
            randomElement = 0;
            hour = +hour + 1;

            if (hour % 24 === 0) {
                hour = 0;
            }
        }

        times.push(`${hour <= 10 ? `0${hour}` : hour}:${randomElement <= 10 ? `0${randomElement}` : randomElement}:00`)
    }

    return times;
};