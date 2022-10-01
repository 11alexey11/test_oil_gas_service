import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'rc-table';

import { HeaderCell } from './HeaderCell';
import { TableWrapper } from './TableWrapper';
import { BodyCell } from './BodyCell';
import { BodyRow } from './BodyRow';

import { getPersons } from '../../store/table/actions';
import { getErrorsSelector, getPersonsSelector } from '../../store/table/selectors';
import { customizeTableData } from '../../utils/customizeTableData';
import { tableColumns } from '../../constants/tableColumns';

import './index.scss';

const components = {
    table: TableWrapper,
    header: {
        cell: HeaderCell
    },
    body: {
        row: BodyRow,
        cell: BodyCell
    }
};

const TableContainer = () => {
    const dispatch = useDispatch();
    const [isFetching, setIsFetching] = useState(true);

    const persons = useSelector(getPersonsSelector);
    const error = useSelector(getErrorsSelector);

    useEffect(() => {
        if (isFetching) {
                console.log('Я тут')
                dispatch(getPersons());
                setIsFetching(false);
        }
        
    }, [isFetching]);

    const scrollHandler = ({ target }) => {
        // clientHeight + scrollTop = clientHeight
        console.log('All: ', target.scrollHeight);
        console.log('Sum: ', target.clientHeight + target.scrollTop);
        if (target.scrollHeight - (target.clientHeight + target.scrollTop) < 50) {
            setIsFetching(true);
        }
    }

    return (
        <>
            {
                !error ? 
                (<div className='table'>
                    <h2 className='table__title'>Список участников</h2>
                    <div onScroll={scrollHandler} className='table__container'>
                        <Table className='table__rc' components={components} tableLayout='fixed' rowKey="id" data={persons} columns={tableColumns} />
                    </div>
                </div>)
                : <div>Что-то пошло не так</div>
            }
        </>    
    )
};

export default TableContainer;