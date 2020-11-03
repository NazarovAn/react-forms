import React from 'react';
import './GameStart.css';

function getAuthorizationHeader() {
  const accessData = JSON.parse(localStorage.getItem('access'));
  const bearer = accessData.token_type;
  const token = accessData.access_token;
  const header = `${bearer} ${token}`;
  return header;
}

async function sendGameDifficulty() {
  getAuthorizationHeader();
  const difficulty = document.querySelector('.game-start__select').value;
  const url = `https://internsapi.public.osora.ru/api/game/play`;
  const formData = new FormData();
  formData.append('type_hard', difficulty);
  formData.append('type', 1);
  const response = await fetch(url, {
    headers: {
      'Authorization': getAuthorizationHeader(),
      
    },
    method: 'POST',
    body: formData,
  });
  
  const respJson = await response.json();
  console.log(respJson);
}

function startGame(ev) {
  ev.preventDefault();
  sendGameDifficulty();
}

export default function GameStart() {
  return (
    <div className="game-start__box">
      <select className="game-start__select">
        <option className="game-start__options" disabled="disabled" value>Выберите сложность</option>
        <option className="game-start__options" value="1">Easy/Легко</option>
        <option className="game-start__options" value="2">Hard/Тяжело</option>
      </select>
      <button className="game-start__btn" type="submit" onClick={ (ev) => startGame(ev) }>Start</button>
    </div>
  )
}
