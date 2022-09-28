import { useDispatch, useSelector } from 'react-redux';
import { getPersons, getPersonsSelector } from '../../store/table';

import { Chart } from '../Chart';
import { Table } from '../Table';

import './index.scss';

const App = () => {
    return (
        <div className='container'>
            <Table />
            <Chart />
        </div>
    )
};

export default App;