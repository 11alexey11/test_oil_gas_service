import { determineGender } from './determineGender';

// возвращение нового массива с доп полем number и обновленным полем gender
export const customizeTableData = (tableData) => {
    return tableData.map((dataElement, index) => ({ ...dataElement, number: index + 1, gender: determineGender(dataElement.gender) }));
}