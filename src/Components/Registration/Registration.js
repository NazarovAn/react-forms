import React from 'react';
import './Registration.css';

async function submitAuthorization(ev) {
  ev.preventDefault();
  const name = document.querySelector('.registration__name').value;
  const email = document.querySelector('.registration__email').value;
  const password = document.querySelector('.registration__password').value;
  const confirmation = document.querySelector('.registration__password_confirmation').value;

  const url = 'https://internsapi.public.osora.ru/api/auth/signup';
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('password', password);
  formData.append('password_confirmation', confirmation)

  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  })

  const json = await response.json();

  if (json.status) {
    console.log(json.data.message);
    return;
  }
  
  console.log(json.errors);
}

export default function Registration() {
  return (
    <form className="registration__form">
      <h2 className="registration__heading">Registration</h2>
      <input type="text" className="registration__input registration__name" placeholder="Name"></input>
      <input type="email" className="registration__input registration__email" placeholder="Email"></input>
      <input type="password" className="registration__input registration__password" placeholder="Password"></input>
      <input type="password" className="registration__input registration__password_confirmation" placeholder="Confirm Password"></input>
      <button type="submit" className="registration__button" onClick={ (ev) => submitAuthorization(ev) }>Sign in</button>
    </form>
  )
}
