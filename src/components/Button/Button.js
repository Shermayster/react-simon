import React from 'react';

const button = (props) => (
    <button
        disabled={props.disabled}
        className={props.clases.join(' ') + 'Button'}
        onClick={props.clicked}>{props.children}</button>
);

export default button;