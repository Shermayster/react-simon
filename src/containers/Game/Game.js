import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import List from '../List/list';
import './Game.css';
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
            showList:true
        }
    }
    
    addColor = () => {
        this.setState(() => {
            return {
                colors: [...this.state.colors, getRandomNum()],                
                showListFlag:true
            }
        });
        this.hideList();
    }

    hideList(){
        this.state.colors.length != 0 ? showListTime = this.state.colors.length * 2000 : showListTime = showListTime;
        console.log(showListTime);
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

    finishGame = () => {
        return this.props.onFinishGame(this.state.playerTurn);
    }    

    handleWrongAnswer() {
        this.finishGame();
    }

    getColors = () => {
        return this.state.colors.map(color => <span>{colorsEnum[color]}</span>)
    }


    render() {
        return (
            <div className="Game">

                <div>
                    <span>Player Turn: {this.state.playerTurn}</span>
                </div>
                <Button clicked={() => this.handlePlayerTurn(0)} clases={['Red']}>{colorsEnum[0]}</Button>
                <Button clicked={() => this.handlePlayerTurn(1)} clases={['Green']}>{colorsEnum[1]}</Button>
                <Button clicked={() => this.handlePlayerTurn(2)} clases={['Blue']}>{colorsEnum[2]}</Button>
                <Button clicked={() => this.handlePlayerTurn(3)} clases={['Yellow']}>{colorsEnum[3]}</Button>
                { this.state.showListFlag ? <List colors = {this.getColors()}></List> : null }
            </div>
        )

    }
}

export default Game;