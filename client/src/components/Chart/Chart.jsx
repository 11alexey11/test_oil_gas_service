import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Brush, CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { chartLineNames } from '../../constants/chartLineNames';
import { getData } from '../../store/chart/actions';
import { getCoordinatesSelector, getErrorsSelector } from '../../store/chart/selectors';
import { generateColor } from '../../utils/generateColor';
import { validateChartData } from '../../utils/validateChartData'

import './index.scss';

const Chart = () => {
    const dispatch = useDispatch();
    const [isFetching, setIsFetching] = useState(true);

    // мемоизировать цвета, чтобы одинаковый цвет графиков был
    const colors = useMemo(() => generateColor(chartLineNames.length), [chartLineNames.length]);
    const coordinates = useSelector(getCoordinatesSelector);
    const error = useSelector(getErrorsSelector);

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
        }
        
    }, [isFetching]);

    return (
        <>
            {
                error.length === 0 && coordinates.length !== 0 ?
                (<div className='chart' onScroll={scrollHandler}>
                    <ResponsiveContainer width='100%' height='100%'>
                        <LineChart
                            layout='vertical'
                            data={coordinates}
                            margin={{
                                top: 20,
                                right: 40,
                                left: 30,
                                bottom: 5
                            }}
                        >
                            <Brush dataKey="name" height={30} stroke="#8884d8" width={150} />
                            <CartesianGrid vertical={false} />
                            <XAxis type='number' orientation='top' />
                            <YAxis 
                                type='category'
                                dataKey='name' 
                            />
                            {
                                chartLineNames.map((item, index) => {
                                    return <Line key={index} dataKey={item} stroke={colors[index]} dot={false} isAnimationActive={false} />
                                })
                            }
                        </LineChart>
                    </ResponsiveContainer>
                </div>) : <div>Что-то пошло не так</div>
            }
        </>
    )
};

export default Chart;