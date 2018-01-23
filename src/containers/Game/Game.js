import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import './Game.css';
var colorsEnum = Object.freeze({0: "RED", 1: "GREEN", 2: "BLUE", 3: "YELLOW"});
var getRandomNum = () =>  Math.floor(Math.random() * 4);

export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerTurn: props.playerTurn || 0,
            colors: props.colors || [],
        }
    }
    
    addColor = () => {
        this.setState(() => {
            return {colors: [...this.state.colors, getRandomNum()]}
        });
    }
    
    componentDidMount() {
        if(this.state.colors.length === 0) {
            this.addColor();
        }
    }

    handlePlayerTurn = (buttonColor) => {
        this.handlePlayerColor(buttonColor);
    }

    handlePlayerColor = (buttonColor) => {
        this.checkIfColorsMatch(buttonColor) ? 
        this.handleRightAnswer() : this.handleWrongAnswer()
    }

    checkIfColorsMatch(buttonColor) {
        return buttonColor === this.state.colors[this.state.playerTurn];
    }

    handleRightAnswer() {
        this.setState(() => {
            return {playerTurn: this.state.playerTurn + 1}
        });
        this.addColor();
    }

<<<<<<< HEAD
    finishGame = () => {
        return this.props.onFinishGame(this.state.playerTurn);
    }    
=======
    handleWrongAnswer() {
        this.setState(() => {
            return {
                playerTurn: 0,
                colors: [getRandomNum()],
            }
        });
    }

    getColors = () => {
        return this.state.colors.map(color => <span>{colorsEnum[color]}</span>)
    }
>>>>>>> master

    render() {
        return (
            <div className="Game">
<<<<<<< HEAD
                <Button clases={['Red']}>Red</Button>
                <Button clases={['Green']}>Green</Button>
                <Button clases={['Blue']}>Blue</Button>
                <Button clases={['Yellow']}>Yellow</Button>
                <button onClick={this.finishGame.bind(this)}>Finish</button>
=======
                <div>
                    <span>Player Turn: {this.state.playerTurn}</span>
                </div>
                <Button clicked={() => this.handlePlayerTurn(0)} clases={['Red']}>{colorsEnum[0]}</Button>
                <Button clicked={() => this.handlePlayerTurn(1)} clases={['Green']}>{colorsEnum[1]}</Button>
                <Button clicked={() => this.handlePlayerTurn(2)} clases={['Blue']}>{colorsEnum[2]}</Button>
                <Button clicked={() => this.handlePlayerTurn(3)} clases={['Yellow']}>{colorsEnum[3]}</Button>
                {this.getColors()}
>>>>>>> master
            </div>
        )

    }
}

export default Game;