import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPersons } from '../../store/table/actions';
import { getErrorsSelector, getPersonsSelector } from '../../store/table/selectors';

import './index.scss';

const TableContainer = () => {
    const dispatch = useDispatch();
    const [isFetching, setIsFetching] = useState(true);

    const persons = useSelector(getPersonsSelector);
    const error = useSelector(getErrorsSelector);;

    useEffect(() => {
        if (isFetching) {
                dispatch(getPersons());
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
        <div>Container</div>
    )
};

export default TableContainer;