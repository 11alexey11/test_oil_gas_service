import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

import { chartLineNames } from '../../constants/chartLineNames';
import { clearData, getData } from '../../store/chart/actions';
import { getCoordinatesSelector, getErrorsSelector } from '../../store/chart/selectors';
import { generateColors } from '../../utils/generateColors';

import './index.scss';

// опции для Chart
const options = {
    responsive: true,
    indexAxis: 'y',
    maintainAspectRatio: false,
    scales: {
        yAxis: {
            type: 'category',
        },
        xAxis: {
            type: 'linear',
            position: 'top'
        }
    }
}

const Chart = () => {
    const dispatch = useDispatch();
    const [isFetching, setIsFetching] = useState(true);
    // state для динамического изменения высоты контейнера для chart
    const [coefficientHeight, setCoefficientHeight] = useState(0);

    // получение значений с сервера
    const coordinates = useSelector(getCoordinatesSelector);
    // мемоизирование значение цветов, чтобы при каждом изменении state были одни и те же цвета для графиков
    const colors = useMemo(() => generateColors(chartLineNames.length), []);
    // получение ошибок с сервера
    const error = useSelector(getErrorsSelector);
    const data = {
        // ticks для y оси
        labels: coordinates.map((coordinate) => coordinate.name),
        // наборы данных
        datasets: chartLineNames.map((chartLine, index) => {
            return {
                label: chartLine,
                // данные в зависимости от элемента chartLineNames (av, bv ...)
                data: coordinates.map((coordinate) => coordinate[chartLine]),
                backgroundColor: colors[index],
                borderColor: colors[index]
            }
        })
    };

    const scrollHandler = ({ target }) => {
        // clientHeight + scrollTop = clientHeight
        if (target.scrollHeight === target.clientHeight + target.scrollTop) {
            setIsFetching(true);
        }
    }

    useEffect(() => {
        // срабатывает при достижении условия скролла
        if (isFetching) {
                // получение нового набора данных
                dispatch(getData());
                setIsFetching(false);
                // прибавение коэффициента
                setCoefficientHeight(coefficientHeight + 1);
        }
        
    }, [isFetching]);

    // componentWillUnmount
    useEffect(() => {
        return () => {
            dispatch(clearData());
        }
    }, []);

    return (
        <>
            {
                !error ?
                (<div onScroll={scrollHandler} className='chart' >
                    <div className='chart__container' style={{ height: `${coefficientHeight * 700}px` }}>
                        <Line height='100%' data={data} options={options} />
                    </div>
                </div>) : <div>Что-то пошло не так</div>
            }
        </>
    )
};

export default Chart;