import React, { Component } from 'react';
import './App.css';
import { Enter } from './containers/Enter/Enter';
import { Game } from './containers/Game/Game';

class App extends Component {
  constructor(props = {gameSate: "start"}) {
    super(props)
    this.state = {
      gameState: "start"
    }
  }

  changeGameState = (state) => {
    this.setState((state) => {
      return { gameState: state }
    })
  }
  renderGameState = () => this.state.gameState === "start" ? 
  <Enter startGame={this.changeGameState} /> : this.state.gameState === "game" ? <Game/> : <p>{this.state.gameState}</p>

  

  render() {
    return (
      this.renderGameState()
    );
  }
}

export default App;
