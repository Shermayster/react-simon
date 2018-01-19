import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import './Enter.css';

export class Enter extends Component {
    test = ()  => {
        console.log('test')
     }
    render () {
        return(
            <div className="Enter">
                <Button clicked={() => this.props.startGame()} clases={['start-game']}>Start Game</Button>
            </div>
        )
    }
}

export default Enter;