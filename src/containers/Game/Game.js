import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import './Game.css';
const colorsEnum = Object.freeze({0: "Red", 1: "Green", 2: "Blue", 3: "Yellow"});
const getRandomNum = () =>  Math.floor(Math.random() * 4);

export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerTurn: props.playerTurn || 0,
            colors: props.colors || [],
            showModal: true
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
        const playerTurn = this.state.playerTurn;
        this.setState(() => {
            return {playerTurn: playerTurn + 1}
        });
        this.addColor();
    }

    handleWrongAnswer() {
        this.setState(() => {
            return {
                playerTurn: 0,
                colors: [getRandomNum()],
            }
        });
    }

    getColors = () => {
        return this.state.colors.map((color, index) => {
            return <span key={colorsEnum[color]+index}>{colorsEnum[color]}</span>
        })
    }

    getButtons = () => {
        return Object.values(colorsEnum).map((color, index) => {
            return <Button key={color+"Button"} 
                        clicked={() => this.handlePlayerTurn(index)} 
                        clases={[color]}>{color}
                    </Button>
        })
    }

    toggleModal = () => {
        return this.setState(() => {
            return { showModal: false } 
        });
    }


    render() {
        return (
            <div className="Game">
                <div>
                    <span>Player Turn: {this.state.playerTurn}</span>
                </div>
                {this.getButtons()}
                {this.getColors()}
                <Modal display={this.state.showModal ? 'block' : 'none'} toggleModal={() => this.toggleModal()}/>
            </div>
        )

    }
}

export default Game;