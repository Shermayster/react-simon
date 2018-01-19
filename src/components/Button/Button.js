import React from 'react';


const button = (props) => (
    <button
        disabled={props.disabled}
        className={props.clases ? props.clases.join(' ') + 'Button' : 'Button'}
        onClick={props.clicked}>{props.children}</button>
);

export default button;