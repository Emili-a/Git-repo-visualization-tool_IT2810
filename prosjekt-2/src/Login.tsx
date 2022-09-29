import React from 'react';
import './App.css';
import axios from 'axios';

function Login() {
  return (
    <div className="Login">
      <h1>Sjekk info om git repo</h1>
      <input id="url" type="text" placeholder="Skriv inn repo navn" />
      <input id="token" type="text" placeholder="Skriv inn token" />
      <button onClick={checkRepo}>Sjekk repo</button>
    </div>
  );
}

interface gitrepo {
  url: string;
  token: string;
}

function checkRepo() {
  const url = document.getElementById("url") as HTMLInputElement;
  const token = document.getElementById("token") as HTMLInputElement;
  const repo: gitrepo = {
    url: url.value,
    token: token.value
  }
  console.log(repo);
  const api = axios.create({
    baseURL: url.value
  })
// check if repo exist with react ajax
  api.get('/').then((response) => {
    console.log(response);
  }).catch((error) => {
    console.log(error);
  })
}

export default Login;
