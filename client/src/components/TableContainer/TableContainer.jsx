import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'rc-table';

import { getPersons } from '../../store/table/actions';
import { getErrorsSelector, getPersonsSelector } from '../../store/table/selectors';
import { customizeTableData } from '../../utils/customizeTableData';
import { tableColumns } from '../../constants/tableColumns';

import './index.scss';
import { HeaderCell } from './HeaderCell';
import { TableWrapper } from './TableWrapper';

const components = {
    table: TableWrapper,
    header: {
        cell: HeaderCell,

    }
};

const TableContainer = () => {
    const dispatch = useDispatch();
    const [isFetching, setIsFetching] = useState(true);

    const persons = customizeTableData(useSelector(getPersonsSelector));
    const error = useSelector(getErrorsSelector);;

    useEffect(() => {
        if (isFetching) {
                dispatch(getPersons());
                setIsFetching(false);
        }
        
    }, [isFetching]);

    const scrollHandler = ({ target }) => {
        // clientHeight + scrollTop = clientHeight
        if (target.scrollHeight - (target.clientHeight + target.scrollTop) < 5) {
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