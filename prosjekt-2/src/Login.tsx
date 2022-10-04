import React, {useState, Dispatch, SetStateAction} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/RepoVisualsPage";
import Api from "./Api";
import RepoVisuals from "./pages/RepoVisualsPage";
import Test from "./pages/test";
import './App.css';

function Login({setResponse, setUrl}) {

  //const [url, setUrl] = useState("");

  async function checkRepo() {
    const id = document.getElementById("id") as HTMLInputElement;
    const token = document.getElementById("token") as HTMLInputElement;
    const repo: gitrepo = {
      id: id.value,
      token: token.value
    }
    const url = ("https://gitlab.stud.idi.ntnu.no/api/v4/projects/" + repo.id + "/repository/branches");
  
    setUrl(url);
    setResponse(await fetch(url, { method: 'GET', headers: { "PRIVATE-TOKEN": repo.token } }));

  
  } 
  return (
    <div className="Login">
      <h1>Check info about gitlab repo</h1>
      <input id="id" type="text" placeholder="Write prosject-id to repo"/>
      <input id="token" type="text" placeholder="Write token"/>
      <button onClick={checkRepo}>Check repo</button>
    </div>
  );
}

interface gitrepo {
  id: string;
  token: string;
}

export default Login;
// export response

