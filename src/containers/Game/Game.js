import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import './Game.css';
import List from '../List/list';
import { setTimeout } from 'timers';
var colorsEnum = Object.freeze({0: "RED", 1: "GREEN", 2: "BLUE", 3: "YELLOW"});
var getRandomNum = () =>  Math.floor(Math.random() * 4);
let showModalTime = 2000;


export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerTurn: props.playerTurn || 0,
            colors: props.colors || [],
            showModal: true,
            modalContent: null,
            showListFlag:true,
            score : -1
        }
        //TO-DO make someting beautiful about start score  
    }
    
    addColor = () => {
        this.setState(() => {
            return {
                colors: [...this.state.colors, getRandomNum()],                
                
            }
        });
    }

    nulifyPlayerTurn = () => {
        this.setState(() => {
           return { playerTurn:0 }
        })
    }

    addScore = () => {
        this.setState((prevState) => {
            return {
                score: prevState.score + 1
            }
        })
    }

    hideModalAferDelay(){
        this.state.colors.length != 0 ? showModalTime = this.state.colors.length * 2000 : showModalTime = showModalTime;
        setTimeout(() =>{
            this.hideModal();      
        }, showModalTime);
    }

    hideModal = () => {
        this.setState(() => {
            return {            
                showModal:false
            }
        }); 
    }
    
    componentDidMount() {
        if(this.state.colors.length === 0) {
            this.addColor();
        }
        this.setState(() => {
            return {modalContent: this.getColors()}
        });
        this.hideModalAferDelay();
        // this.closeModalAfterDelay();

    }

    closeModalAfterDelay = () => {
        setTimeout(() => this.toggleModal(), 2000)
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
            return {
                playerTurn: playerTurn + 1
            }
        },() => {
            if (this.checkTurn()) {
                this.addNextStep();
            }
        });    
    }

    checkTurn = () => {
        return this.state.colors.length === this.state.playerTurn 
    }
    addNextStep = () => {
        this.addColor();
        this.nulifyPlayerTurn();
        this.addScore();
        this.showModal();
        this.hideModalAferDelay();
    }

    finishGame = () => {
        return this.props.onFinishGame(this.state.score);
    }    

    handleWrongAnswer() {
        this.finishGame();
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

    showModal = () => {
        return this.setState(() => {
            return { showModal: true } 
        });
    }

    getModalContent = () => {
        return this.getColors();
    }

    renderModal = () => {
        return this.state.showModal ? (<Modal display={this.state.showModal ? 'block' : 'none'} 
        toggleModal={() => this.hideModal()}>
            <List colors = {this.getColors()}></List>
        </Modal>) : null;
    }

    render() {
        return (
            <div className="Game">
                <div>
                    <span>Player Turn: {this.state.playerTurn}</span>
                </div>
                {this.getButtons()}
                {this.getColors()}
                {this.renderModal()}
                
            </div>
        )
    }
}

export default Game;