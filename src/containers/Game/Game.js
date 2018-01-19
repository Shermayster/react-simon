import React, { Component } from 'react';
import Button from '../../components/Button/Button';

export class Game extends Component {
    render() {
        return (
            <div className="Game">
                <Button>Red</Button>
                <Button>Green</Button>
                <Button>Blue</Button>
                <Button>Yellow</Button>
            </div>
        )

    }
}

export default Game;