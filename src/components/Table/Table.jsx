import { personsApi } from '../../api/api';
import { TableHeader } from './TableHeader';

const Table = () => {

    return (
        <table>
            <caption>Таблица участников</caption>
            <TableHeader />
        </table>
    )
};

export default Table;