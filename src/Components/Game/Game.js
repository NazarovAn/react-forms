import React, { Component } from 'react';
import GameStart from '../GameStart/GameStart';
import './Game.css';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state ={
      score: 0,
      timer: 0,
      equation: '', 
      answers: [0,0,0,0],
      header: null,
      difficulty: null,
    };
  }

  setGameState(obj){
    this.setState({
      score: obj.points,
      timer: obj.time,
      equation: obj.question,
      answers: obj.options,
      header: obj.header,
      difficulty: obj.difficulty,
    })
  }

  async sendAnswer(answer) {
    console.log(this.state);
    const url = 'https://internsapi.public.osora.ru/api/game/play';
    const header = this.state.header;
    const difficulty = this.state.difficulty;
    const formData = new FormData();
    formData.append('type_hard', difficulty);
    formData.append('answer', answer);
    formData.append('type', 2);

    const response = await fetch(url, {
      headers: {
        'Authorization': header,        
      },
      method: 'POST',
      body: formData,
    })
    
    const respJson = await response.json();
    console.log(respJson);
    if (respJson.data.status === 1) {
      console.log('End Game');
      return
    }
    const newState = {...respJson.data, header, difficulty};
    this.setGameState(newState)
  }

  render() {
    return (
      <div className="game-box">
        <GameStart setGameState={this.setGameState.bind(this)} />
        <p className="game__score">Score: {this.state.score}</p>
        <p className="game__time">Timer: {this.state.timer}</p>
        <p className="game__equation">{this.state.equation}</p>
        <ul className="game__answers">
          {this.state.answers.map((answer, index) => <li className="answers__item" key={index} onClick={() => this.sendAnswer(answer)}>{answer}</li>)}
        </ul>
        <button className="game__go-back-btn">Go back</button>        
      </div>
    )
  }
}
