import { useDispatch, useSelector } from 'react-redux';
import { getPersons, getPersonsSelector } from '../../store/table';

import { Table } from '../Table';

import './index.scss';

const App = () => {
    return (
        <div className='container'>
            <Table />
        </div>
    )
};

export default App;