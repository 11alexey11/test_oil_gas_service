import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Brush, CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { chartLineNames } from '../../constants/chartLineNames';
import { getData } from '../../store/chart/actions';
import { getCoordinatesSelector } from '../../store/chart/selectors';
import { generateColor } from '../../utils/generateColor';
import { validateChartData } from '../../utils/validateChartData'

import './index.scss';

const data = {
    date: "1953-06-10",
    hour: "16",
    av: [18, 36, 34, 37, 26, 36, -28, 17, -8, 32],
    bv: [-37, 31, 20, 15, -3, -27, -4, 27, 9, -4],
    cv: [20, 0, -32, 19, 24, 34, 13, -32, 37, -27],
    dv: [-2, 12, 33, -9, 25, 23, 10, 22, -31, -8],
    ev: [-15, 7, 29, -19, 30, 36, -40, -14, -1, -15],
    fv: [-22, 7, 25, 0, 23, 26, 13, -3, -12, -9],
    gv: [-2, -4, 29, 2, -25, -16, 2, 28, 21, -15]
}

const Chart = () => {
    const [chartData, setChartData] = useState([]);
    const dispatch = useDispatch();
    const [isFetching, setIsFetching] = useState(true);
    // мемоизировать цвета, чтобы одинаковый цвет графиков был
    const colors = useMemo(() => generateColor(chartLineNames.length), [chartLineNames.length]);

    // const coordinates = useSelector(getCoordinatesSelector);

    const scrollHandler = ({ target }) => {
        // clientHeight + scrollTop = clientHeight
        if (target.scrollHeight === target.clientHeight + target.scrollTop) {
            setIsFetching(true);
        }
    }

    useEffect(() => {
        if (isFetching) {
                // dispatch(getData());
                setChartData([...chartData, ...validateChartData(data)]);
                setIsFetching(false);
        }
        
    }, [isFetching]);

    return (
        <div className='chart' onScroll={scrollHandler}>
            <ResponsiveContainer>
                <LineChart
                    layout='vertical'
                    data={chartData}
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
            
        </div>
    )
};

export default Chart;