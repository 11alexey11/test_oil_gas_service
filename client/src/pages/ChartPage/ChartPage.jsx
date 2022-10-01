import { Link } from 'react-router-dom';

import Chart from '../../components/Chart/Chart';

const ChartPage = () => {
    return (
        <>
            <Link to='/' className='btn'>Назад</Link>
            <Chart />
        </>
    )
};

export default ChartPage;