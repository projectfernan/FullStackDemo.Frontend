import { useContentModalContext } from "@ContentModalContext/ContentModalContext";
import { Modal } from "react-bootstrap";

export const ContentModal = () => {

    const { modalTitle, modalClassSize, show, onHide, bodyContent, footerButtons } = useContentModalContext();

    return(
        <>
            <Modal show={show} onHide={onHide} size={modalClassSize} >
                <Modal.Header>
                    <Modal.Title>
                        <h5 className="mt-2">{modalTitle}</h5>
                    </Modal.Title>
                    <button type="button" className="close" onClick={onHide} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    {bodyContent}
                </Modal.Body>
                <Modal.Footer>
                    {footerButtons}
                </Modal.Footer>
            </Modal>
        </>
    )
}