import React, {Component} from 'react';
import './Button.css';


class Button extends Component {
    constructor(props) {
        super(props);
    }
    
    playSound = (soundLink) =>{
        if(!soundLink) return;
        let sound = new Audio();
        sound.src = soundLink;
        sound.play();
    }

    render(){ return(
    <button
        disabled={this.props.disabled}
        className={this.props.clases ? this.props.clases.join(' ') + ' Button' : 'Button'}
        onClick={this.props.clicked}
        onMouseDown = {() => this.playSound(this.props.soundLink)}
        >{this.props.children}</button>
    )};
}   

export default Button;