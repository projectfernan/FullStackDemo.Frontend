//Types
import { IMobileSuitList } from "@IMobileSuits/IMobileSuits";
import { IRegularButtonProps } from '@IRegularButtonProps/IRegularButtonProps';
//Utils
import { FormatDateTime } from '@FormatDateTime/DateHelper';
//Components
import { RegularButton } from '@RegularButton/RegularButton';
import { RegularButtonProvider } from '@RegularButtonContext/RegularButtonContext';

const MobileSuitsList = (props: IMobileSuitList) => {
    const {fields, data} = props
    const dataFields = fields || (data.length > 0 ? Object.keys(data[0]) : []);

    const updateButton: IRegularButtonProps = {
        buttonClass: 'btn-warning',
        buttonName: '',
        buttonIconClass: 'fas fa-edit',
        buttonHandleClick: () => {
           
        }
    };    

    const deleteButton: IRegularButtonProps = {
        buttonClass: 'btn-danger',
        buttonName: '',
        buttonIconClass: 'fas fa-trash',
        buttonHandleClick: () => {
           
        }
    };   

    return (
        <>
            {props.data.length > 0 ? (
                props.data.map((row, index) => (
                    <tr key={index}>
                        {dataFields.map((col) => (
                            <td key={col}>
                                {/* Check if the column is a date and format it, otherwise just show the value */}
                                {col === 'dateCreated' || col === 'dateEdited' ? 
                                    row[col] ? 
                                        FormatDateTime(row[col]) // Format the date string
                                            : row[col] 
                                                : row[col]}            
                            </td>
                        ))}

                        <td> 
                            <RegularButtonProvider buttonProps={updateButton}>
                                <RegularButton />
                            </RegularButtonProvider>

                            <RegularButtonProvider buttonProps={deleteButton}>
                                <RegularButton />
                            </RegularButtonProvider>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={data.length}>No data available.</td>
                </tr>
            )}
        </>
    )
}

export default MobileSuitsList
