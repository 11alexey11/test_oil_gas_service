import { personsApi } from '../../api/api';
import { TableHeader } from './TableHeader';

// const qew = async () => {
//     const response = await personsApi.getPersons();
//     console.log(response);
// }

// qew();

const Table = () => {
    

    

    return (
        <table>
            <caption>Таблица участников</caption>
            <TableHeader />
        </table>
    )
};

export default Table;