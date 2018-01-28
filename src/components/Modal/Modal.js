import React from 'react';
import './Modal.css'

const modal = (props) => (
    <div style={{display: props.display || "none"}} className="Modal">
        <div className="modal-content">
            <span onClick={props.toggleModal} className="modal-close-btn">&times;</span>
            <div>
                test
            </div>
        </div>
    </div>
);

export default modal;