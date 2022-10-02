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
    const [coefficientHeight, setCoefficientHeight] = useState(0);

    const coordinates = useSelector(getCoordinatesSelector);
    const colors = useMemo(() => generateColors(chartLineNames.length), []);
    const error = useSelector(getErrorsSelector);
    const data = {
        labels: coordinates.map((coordinate) => coordinate.name),
        datasets: chartLineNames.map((chartLine, index) => {
            return {
                label: chartLine,
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
        if (isFetching) {
                dispatch(getData());
                setIsFetching(false);
                setCoefficientHeight(coefficientHeight + 1);
        }
        
    }, [isFetching]);

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