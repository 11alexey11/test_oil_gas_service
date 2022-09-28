const TableCell = ({ value, cn, isNamePicExist, isRes }) => {
    return (
        !isNamePicExist && !isRes && <td className={`table__main__table__body__row__cell ${cn}`}>{value}</td>
    )
};

export default TableCell;