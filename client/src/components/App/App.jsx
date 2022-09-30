import { useDispatch, useSelector } from 'react-redux';
import { getPersons, getPersonsSelector } from '../../store/table';

import { Chart } from '../Chart';
import { TableContainer } from '../TableContainer';

import './index.scss';

const App = () => {
    return (
        <div className='container'>
            <TableContainer />
            {/* <Chart /> */}
        </div>
    )
};

export default App;