import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPersons } from '../../store/table/actions';
import { getPersonsSelector } from '../../store/table/selectors';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

import './index.scss';

const Table = () => {
    const dispatch = useDispatch();

    const persons = useSelector(getPersonsSelector);

    // useEffect(() => {
    //     dispatch(getPersons());
    // }, []);

    return (
        <div className='wrapper'>
            <table className='table__header'>
                <caption className='table__header__title'>Таблица участников</caption>
                <TableHeader />
            </table>
            <div className='table__main'>
                <table className='table__main__table'>
                    <tbody className='table__main__table__body'>
                        {
                            persons.map((person, index) => <TableRow key={person.id} person={person} order={index + 1} />)
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
        
    )
};

export default Table;