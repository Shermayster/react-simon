import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import './Game.css';
import List from '../List/list';
import { setTimeout } from 'timers';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import simonSound1 from '../../assets/sounds/simonSound1.mp3';
import simonSound2 from '../../assets/sounds/simonSound2.mp3';
import simonSound3 from '../../assets/sounds/simonSound3.mp3';
import simonSound4 from '../../assets/sounds/simonSound4.mp3';
const colorsEnum = Object.freeze({0: "RED", 1: "GREEN", 2: "BLUE", 3: "YELLOW"});

const Buttons = [
    {
        color:"RED",
        soundLink: simonSound1
    }, 
    { 
        color:"GREEN",
        soundLink: simonSound2
    },
    {
        color:"BLUE",
        soundLink: simonSound3
    },
    {
        color: "YELLOW",
        soundLink: simonSound4
    }
];
const getRandomNum = () =>  Math.floor(Math.random() * 4);
const showModalTime = 2000;


export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerTurn: props.playerTurn || 0,
            colors: props.colors || [],
            showModal: true,
            modalContent: null,
            showListFlag:true,
            score: -1
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
        const currentModalTime = showModalTime * (this.state.colors.length ? this.state.colors.length : 1);
        setTimeout(() =>{
            this.hideModal();      
        }, currentModalTime);
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
            return { modalContent: this.getColors() }
        });
        this.hideModalAferDelay();
    }

    handlePlayerTurn = (buttonColor) => {
        this.handlePlayerColor(buttonColor);
    }

    handlePlayerColor = (buttonColor) => {
        this.checkIfColorsMatch(buttonColor) ? 
        this.handleRightAnswer() : this.handleWrongAnswer();
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
        return this.state.colors.length === this.state.playerTurn;
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
            return <div key={colorsEnum[color]+index}>{colorsEnum[color]}</div>
        })
    }

    getButtons = () => {
        return Buttons.map((button, index) => {
            return <Button key={button.color+"Button"} 
                        clicked={() => this.handlePlayerTurn(index)} 
                        clases={[button.color]}
                        soundLink = {button.soundLink}
                        >{button.color}
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

    test = () =>{
        console.log('testtest');
    }

    renderModal = () => {
        return this.state.showModal ? (<Modal display={this.state.showModal ? 'block' : 'none'} 
        toggleModal={() => this.hideModal()}>
            <List colors = {this.getColors()}></List>
        </Modal>) : null;
    }

    render() {
        return (
            <div className="main">
                <div>
                    <span>Player Turn: {this.state.playerTurn}</span>
                </div>
                
                <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>

            <button className="item" onClick = {this.test}>btn</button>
        </ReactCSSTransitionGroup>

                
                {this.renderModal()}
            </div>
        )
    }
}

export default Game;