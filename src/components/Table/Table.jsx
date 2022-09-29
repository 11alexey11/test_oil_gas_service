import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPersons } from '../../store/table/actions';
import { getErrorsSelector, getPersonsSelector } from '../../store/table/selectors';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

import './index.scss';

const Table = () => {
    const dispatch = useDispatch();
    const [isFetching, setIsFetching] = useState(true);

    const persons = useSelector(getPersonsSelector);
    const error = useSelector(getErrorsSelector);;

    useEffect(() => {
        if (isFetching) {
                // dispatch(getPersons());
                setIsFetching(false);
        }
        
    }, [isFetching]);

    const scrollHandler = ({ target }) => {
        // clientHeight + scrollTop = clientHeight
        if (target.scrollHeight === target.clientHeight + target.scrollTop) {
            setIsFetching(true);
        }
    }

    return (
        <>
            {
                error.length === 0 && persons.length !== 0 ?
                (<div className='wrapper'>
                    <table className='table__header'>
                        <caption className='table__header__title'>Таблица участников</caption>
                        <TableHeader />
                    </table>
                    <div className='table__main' onScroll={scrollHandler}>
                        <table className='table__main__table'>
                            <tbody className='table__main__table__body'>
                                {
                                    persons.map((person, index) => <TableRow key={person.id} person={person} order={index + 1} />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>) : <div>Что-то пошло не так</div>
            }
        </>
    )
};

export default Table;