import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import './result.css';

export class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: props.score    
        }
    }
    
    render() {
        return (
            <div className="Result">
                <p>Score:{this.state.score}</p>
                <button onClick={this.props.startGame}>Restart</button>
            </div>
        )
    }
}

export default Result;