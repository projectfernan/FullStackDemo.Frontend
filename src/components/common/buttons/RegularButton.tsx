import { useRegularButtonContext } from "@RegularButtonContext/RegularButtonContext";

export const RegularButton = () => {
    const { buttonIconClass, buttonClass ,buttonName , buttonHandleClick } = useRegularButtonContext();

    return(
        <>
            <button type="submit" className={"btn " + buttonClass} onClick = { buttonHandleClick } >
                <i className={buttonIconClass}></i> {buttonName}
            </button>
        </>
    )
}