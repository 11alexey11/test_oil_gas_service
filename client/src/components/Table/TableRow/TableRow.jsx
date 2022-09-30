import { determineGender } from '../../../utils/determineGender';
import { TableCell } from '../TableCell';

const TableRow = ({ person, order }) => {
    const {
        name,
        gender,
        age,
        city,
        duration,
    } = person;

    return (
        <tr className='table__main__table__body__row'>
            <TableCell value={order} cn="number" />
            <TableCell value={name} cn="name" isNamePicExist />
            <TableCell value={determineGender(gender)} cn="gender" />
            <TableCell value={age} cn="age" />
            <TableCell value={city} cn="city" />
            <TableCell value={duration} cn="duration" />
            <TableCell isRes cn="results" />
        </tr>
    )
};

export default TableRow;