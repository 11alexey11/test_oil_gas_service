import { Link } from 'react-router-dom';

import { TableContainer } from '../../components/TableContainer';

const TablePage = () => {
    return (
        <>
            <Link to='/' className='btn'>Назад</Link>
            <TableContainer />
        </>
    )
};

export default TablePage;