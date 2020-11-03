import React from 'react';
import './Authorization.css';

async function submitAuthorization(ev) {
  ev.preventDefault()
  const email = document.querySelector('.authorization__email').value;
  const password = document.querySelector('.authorization__password').value;
  const url = "https://internsapi.public.osora.ru/api/auth/login";
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  })

  const json = await response.json();

  if (json.status) {
    const storageData = JSON.stringify({
      access_token: json.data.access_token,
      expires_at: json.data.expires_at,
      token_type: json.data.token_type,
    });

    localStorage.setItem('access', storageData)
    return;
  }

  console.log(json.errors);
}

export default function Authorization() {
  return (
    <form className="authorization__form">
      <h2 className="authorization__heading">Authorization</h2>
      <input className="authorization__input authorization__email" type="email" placeholder="Email" required></input>
      <input className="authorization__input authorization__password" type="password" placeholder="Password" required></input>
      <button className="authorization__button" type="submit" onClick={ (ev) => submitAuthorization(ev) }>Log in</button>
    </form>
  )
}
