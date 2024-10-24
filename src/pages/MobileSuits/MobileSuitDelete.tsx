import { IMobileSuitDelete } from "@IMobileSuits/IMobileSuits";

const MobileSuitDelete = (props: IMobileSuitDelete) => {

    return(
        <>
            <p>
                Are you sure you want to delete {props.ModelCode} {props.ModelName} ?
            </p>
        </>
    )
}

export default MobileSuitDelete;