import CarForm from "./CarForm"

const Modal = ( props ) => {
    if ( !props.open ) return (<></>);
    return (
        <div onClick={ props.onClose } className="modal-container">
            <div
                className="modal"
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div className="form-container">
                    <div className="exit-container">
                        <p className="exit-button"
                        onClick={props.onClose}>
                            X
                        </p>
                    </div>
                    <div className="form">
                        <CarForm id={ props.id }/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal