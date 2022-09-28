import { headerValues } from '../../../constants/headerValues';

const TableHeader = () => {
    
    return (
        <thead className='table__header__head'>
            <tr className='table__header__row'>
                {
                    headerValues.map((header, index) =>
                        <th className={`table__header__row__cell ${header.key}`} key={index}>{header.value}</th>
                    )
                }
            </tr>
            
        </thead>
    )
};


export default TableHeader;