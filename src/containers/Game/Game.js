import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import './Game.css';

export class Game extends Component {
    render() {
        return (
            <div className="Game">
                <Button clases={['Red']}>Red</Button>
                <Button clases={['Green']}>Green</Button>
                <Button clases={['Blue']}>Blue</Button>
                <Button clases={['Yellow']}>Yellow</Button>
            </div>
        )

    }
}

export default Game;