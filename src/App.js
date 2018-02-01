import React, { Component } from 'react';
import './App.css';
import { Enter } from './containers/Enter/Enter';
import { Game } from './containers/Game/Game';
import { Result } from './containers/Result/result';

class App extends Component {
  constructor(props = {gameSate: "start"}) {
    super(props)
    this.state = {
      gameState: "start",
      score: 0
    }
  }

  changeGameState = (state, score) => {
    this.setState(() => {
      return { 
          gameState: state,
          score:score
      }
    })
  }

  finishGame = (score) => {
    console.log(this.props)
    console.log(score);
    this.changeGameState('result', score);
  }


  renderGameState = () => {
      switch(this.state.gameState){
        case('start') : {
          return <Enter startGame={() => this.changeGameState('game', 0)} />;
        };
        case('game') : {
          return <Game onFinishGame = {this.finishGame}/>;
        };
        case('result') : {
          return <Result score = {this.state.score} startGame={() => this.changeGameState('game', 0)} />;
        }
        {
          return <p>{this.state.gameState}</p>
        }
      }
  }

  render() {
    return ( this.renderGameState() );
  }
}

export default App;
