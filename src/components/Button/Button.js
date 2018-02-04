import React from 'react';
import './Button.css';
const playSound = (soundLink) =>{
    if(!soundLink) return;
    let sound = new Audio();
    sound.src = soundLink;
    sound.play();
}

const button = (props) => {     
   return (<button
        disabled={props.disabled}
        className={props.clases ? props.clases.join(' ') + ' Button' : 'Button'}
        onClick={props.clicked}
        onMouseDown = {() => playSound(props.soundLink)}
        >{props.children}</button>);
}   

export default button;