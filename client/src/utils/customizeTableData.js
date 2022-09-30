export const customizeTableData = (tableData) => {
    return tableData.map((dataElement, index) => ({ ...dataElement, number: index + 1 }));
}