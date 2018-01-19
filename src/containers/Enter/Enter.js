import React, { Component } from 'react';
import Button from '../../components/Button/Button';

export class Enter extends Component {
    render () {
        return(
            <div className="Enter">
                <Button onClick={this.props.startGame} clases={['start-game']}>Start Game</Button>
            </div>
        )
    }
}

export default Enter;