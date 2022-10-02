// функция для получения массива времени (hour - начальный час, count - кол-во времени, возвращает массив времен)
export const getTimes = (hour, count) => {
    // массив минут (каждые 15)
    const minutes = [0, 15, 30, 45];
    let randomNumber = Math.floor(Math.random() * minutes.length);
    // получение рандомного элемента из массива minutes
    let randomElement = minutes[randomNumber];

    // формирование массива tims ([00:00:00])
    const times = [`${hour <= 10 ? `0${hour}` : hour}:${randomElement <= 10 ? `0${randomElement}` : randomElement}:00`];

    // формирование остальных элементов в times, каждый элемент отличается друг от друга на 15 минут
    for (let i = 0; i < count - 1; i += 1) {
        randomElement += 15;

        // если 45 + 15 = 60 минут, то прибавляем час, и randomElement = 0
        if (randomElement % 60 === 0) {
            randomElement = 0;
            hour = +hour + 1;

            // если 23 + 1 = 24 часа, то обновляем час
            if (hour % 24 === 0) {
                hour = 0;
            }
        }

        // записывание в массив times элемент
        times.push(`${hour <= 10 ? `0${hour}` : hour}:${randomElement <= 10 ? `0${randomElement}` : randomElement}:00`)
    }

    return times;
};