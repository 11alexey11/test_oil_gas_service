import { Link } from 'react-router-dom';

import { Chart } from '../Chart';
import { TableContainer } from '../TableContainer';

import './index.scss';

const App = () => {
    return (
        <div className='container'>
            <Link className='btn' to='/table'>Show table</Link>
            <Link className='btn' to='/chart'>Show chart</Link>
            {/* <TableContainer /> */}
            {/* <Chart /> */}
        </div>
    )
};

export default App;