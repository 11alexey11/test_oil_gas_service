import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Brush, CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
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
import { getData } from '../../store/chart/actions';
import { getCoordinatesSelector, getErrorsSelector } from '../../store/chart/selectors';
import { generateColor } from '../../utils/generateColor';

import './index.scss';

const options = {
    maintainAspectRatio: false,
    scales: {
        y: {
            type: 'category'
        },
        x: {
            type: 'linear',
            position: 'top'
        }
    }
}

const Chart = () => {
    const dispatch = useDispatch();
    const [isFetching, setIsFetching] = useState(true);

    const coordinates = useSelector(getCoordinatesSelector);
    const error = useSelector(getErrorsSelector);
    const data = {
        datasets: chartLineNames.map((chartLine) => {
            const color = generateColor();
            return {
                label: chartLine,
                data: coordinates,
                parsing: {
                    yAxisKey: 'name',
                    xAxisKey: chartLine
                },
                backgroundColor: color,
                borderColor: color
            }
        })
    };

    const scrollHandler = ({ target }) => {
        // clientHeight + scrollTop = clientHeight
        console.log('Я тут')
        if (target.scrollHeight === target.clientHeight + target.scrollTop) {
            setIsFetching(true);
        }
    }

    useEffect(() => {
        if (isFetching) {
                dispatch(getData());
                setIsFetching(false);
        }
        
    }, [isFetching]);

    return (
        <>
            {
                !error ?
                (<div className='chart'>
                    <Line onScroll={scrollHandler} width={300} height={900} data={data} options={options} />
                </div>) : <div>Что-то пошло не так</div>
            }
        </>
    )
};

export default Chart;