import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/RepoVisualsPage";
import Api from "./Api";
import RepoVisuals from "./pages/RepoVisualsPage";
import Test from "./pages/test";
import './App.css';
import { useLocalStorage } from "./useLocalStorage";

interface gitrepo {
  id: string;
  token: string;
}

const Login = () => {
  const [storageId, setStorageId] = useLocalStorage("id", "");
  const [storageToken, setStorageToken] = useLocalStorage("token", "");

  async function CheckRepo() {
    const id = document.getElementById("id") as HTMLInputElement;
    const token = document.getElementById("token") as HTMLInputElement;
    
    const repo: gitrepo = {
      id: id.value,
      token: token.value
    }
  
    const url = "https://gitlab.stud.idi.ntnu.no/api/v4/projects/" + repo.id + "/repository/branches";
    const response = await fetch(url, { method: 'GET', headers: { "PRIVATE-TOKEN": repo.token } });
    const status = response.status;
  
    if (status === 200) {
      console.log("Repo funnet");
      setStorageId(repo.id);
      setStorageToken(repo.token);
    
    } 
    
    else {
      alert("prosjekt-id eller token er feil");
    }
  } 

  return (
    <div className="Login">
      <h1>Check info about gitlab repo</h1>
      <input id="id" type="text" placeholder="Write prosject-id to repo"/>
      <input id="token" type="text" placeholder="Write token"/>
      <button onClick={CheckRepo}>Check repo</button>
    </div>
  );
}
export default Login;
// export response

