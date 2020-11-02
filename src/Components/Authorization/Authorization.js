import React from 'react';
import './Authorization.css';

function sayLoggedIn() {
  console.log('Logged in');
}

export default function Authorization() {
  return (
    <form className="authorization__form">
      <h2 className="authorization__heading">Authorization</h2>
      <input className="authorization__input email" type="text" placeholder="Email" required></input>
      <input className="authorization__input password" type="text" placeholder="Password" required></input>
      <button className="authorization__button" type="submit" onClick={ () => sayLoggedIn() }>Log in</button>
    </form>
  )
}
