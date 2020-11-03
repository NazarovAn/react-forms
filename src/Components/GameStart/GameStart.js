import React from 'react';
import './GameStart.css';

export default function GameStart(props) {
  function getAuthorizationHeader() {
    const accessData = JSON.parse(localStorage.getItem('access'));
    const bearer = accessData.token_type;
    const token = accessData.access_token;
    const header = `${bearer} ${token}`;
    return header;
  }
  
  async function sendGameDifficulty(ev) {
    ev.preventDefault();
    const difficulty = document.querySelector('.game-start__select').value;
    const header = getAuthorizationHeader();
    const url = `https://internsapi.public.osora.ru/api/game/play`;
    const formData = new FormData();
    formData.append('type_hard', difficulty);
    formData.append('type', 1);
    const response = await fetch(url, {
      headers: {
        'Authorization': header,        
      },
      method: 'POST',
      body: formData,
    });
    
    const respJson = await response.json();
    const newState = {...respJson.data, header, difficulty};
    props.setGameState(newState)
  }

  return (
    <div className="game-start__box">
      <select className="game-start__select">
        <option className="game-start__options" disabled="disabled" value>Выберите сложность</option>
        <option className="game-start__options" value="1">Easy/Легко</option>
        <option className="game-start__options" value="2">Hard/Тяжело</option>
      </select>
      <button className="game-start__btn" onClick={(ev) => sendGameDifficulty(ev)}>Start</button>
    </div>
  )
}
