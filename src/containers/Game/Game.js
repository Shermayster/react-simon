import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import './Game.css';
var colorsEnum = Object.freeze({0: "RED", 1: "GREEN", 2: "BLUE", 3: "YELLOW"});
var getRandomNum = () =>  Math.floor(Math.random() * 4);
export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerTurn: 0,
            colors: []
        }
    }
    addColor = () => {
        this.setState(() => {
            return {colors: [...this.state.colors, getRandomNum()]}
        });
    }
    componentDidMount() {
        this.addColor();
    }


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