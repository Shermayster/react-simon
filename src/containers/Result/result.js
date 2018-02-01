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
                <Button clicked={() => this.props.startGame()} clases={['start-game']}>Re-start</Button>
            </div>
        )
    }
}

export default Result;