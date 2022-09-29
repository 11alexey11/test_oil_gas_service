import resultIcon from '../../../assets/pic/result.png';
import nameIcon from '../../../assets/pic/name.png';

const TableCell = ({ value, cn, isNamePicExist, isRes }) => {
    return (
        <>
            {
                !isNamePicExist && !isRes && <td className={`table__main__table__body__row__cell ${cn}`}>{value}</td>
            }
            {
                isRes && 
                    <td className={`table__main__table__body__row__cell ${cn}`}>
                        <img className='table__main__table__body__row__cell icon' src={resultIcon} alt='res'></img>
                    </td>
            }
            {
                isNamePicExist &&
                <td className={`table__main__table__body__row__cell ${cn}`}>
                    <img className='table__main__table__body__row__cell icon' src={nameIcon} alt='name'></img>
                    <span>{value}</span>
                </td>
            }
        </>
    )
};

export default TableCell;