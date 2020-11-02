import React from 'react';
import './Registration.css';

function saySignedIn() {
  console.log('Signed in');
}

export default function Registration() {
  return (
    <form className="registration__form">
      <h2 className="registration__heading">Registration</h2>
      <input type="text" className="registration__input name" placeholder="Name" required></input>
      <input type="text" className="registration__input email" placeholder="Email" required></input>
      <input type="text" className="registration__input password" placeholder="Password" required></input>
      <input type="text" className="registration__input password_confirmation" placeholder="Confirm Password" required></input>
      <button type="submit" className="registration__button" onClick={ () => saySignedIn() }>Sign in</button>
    </form>
  )
}
