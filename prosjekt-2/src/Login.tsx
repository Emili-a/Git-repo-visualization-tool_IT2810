import React from 'react';
import './App.css';

function Login() {
  return (
    <div className="Login">
      <h1>Sjekk info om git repo</h1>
      <input id="id" type="text" placeholder="Skriv inn prosjekt-id til repo"/>
      <input id="token" type="text" placeholder="Skriv inn token"/>
      <button onClick={checkRepo}>Sjekk repo</button>
    </div>
  );
}

interface gitrepo {
  id: string;
  token: string;
}

async function checkRepo() {
  const id = document.getElementById("url") as HTMLInputElement;
  const token = document.getElementById("token") as HTMLInputElement;
  const repo: gitrepo = {
    id: id.value,
    token: token.value
  }
  const url = "https://gitlab.stud.idi.ntnu.no/api/v4/projects/" + repo.id + "repository/branches";
  const response = await fetch(url, { method: 'GET', headers: { 'PRIVATE-TOKEN': repo.token } });
  const status = response.status;

  if (status === 200) {
    console.log("Repo funnet");
  } 
  
  else {
    alert("prosjekt-id eller token er feil");
  }
  
}

export default Login;
