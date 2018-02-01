import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import './Game.css';
import List from '../List/list';
import { setTimeout } from 'timers';
var colorsEnum = Object.freeze({0: "RED", 1: "GREEN", 2: "BLUE", 3: "YELLOW"});
var getRandomNum = () =>  Math.floor(Math.random() * 4);
let showListTime = 2000;


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
                playerTurn:0,
                colors: [...this.state.colors, getRandomNum()],                
                showListFlag:true,
                score:this.state.score + 1
            }
        });
        this.hideList();
    }

    hideList(){
        this.state.colors.length != 0 ? showListTime = this.state.colors.length * 2000 : showListTime = showListTime;
        setTimeout(()=>{
            this.setState(() => {
                return {            
                    showListFlag:false
                }
            });            
        }, showListTime);
    }
    
    componentDidMount() {
        if(this.state.colors.length === 0) {
            this.addColor();
        }
        this.setState(() => {
            return {modalContent: this.getColors()}
        });

        this.closeModalAfterDelay();
        
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
                playerTurn: this.state.playerTurn + 1
            }
        },() => {
            if(this.state.colors.length == this.state.playerTurn){
                this.addColor();
            } 
        });    
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

    toggleModal = () => {
        return this.setState(() => {
            return { showModal: false } 
        });
    }

    getModalContent = () => {
        return this.getColors();
    }

    render() {
        return (
            <div className="Game">
                <div>
                    <span>Player Turn: {this.state.playerTurn}</span>
                </div>
                {this.getButtons()}
                {this.getColors()}
                
                <Modal display={this.state.showModal ? 'block' : 'none'} 
                toggleModal={() => this.toggleModal()}
                modalContent={this.state.modalContent}
                />
                { this.state.showListFlag ? <List colors = {this.getColors()}></List> : null }
            </div>
        )
    }
}

export default Game;