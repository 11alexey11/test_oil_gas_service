import { headerValues } from "../../../constants/headerValues";

const TableHeader = () => {
    
    return (
        <tr>
            {
                headerValues.map((header, index) => 
                    <th key={index}>{header}</th>
                )
            }
        </tr>
    )
};


export default TableHeader;