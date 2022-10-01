import { determineGender } from './determineGender';

export const customizeTableData = (tableData) => {
    return tableData.map((dataElement, index) => ({ ...dataElement, number: index + 1, gender: determineGender(dataElement.gender) }));
}