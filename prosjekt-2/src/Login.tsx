import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/RepoVisualsPage";
import Api from "./Api";
import RepoVisuals from "./pages/RepoVisualsPage";
import Test from "./pages/test";
import './App.css';

function Login() {
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

var url;
var response: Response;

async function checkRepo() {
  const id = document.getElementById("id") as HTMLInputElement;
  const token = document.getElementById("token") as HTMLInputElement;
  const repo: gitrepo = {
    id: id.value,
    token: token.value
  }

  url = "https://gitlab.stud.idi.ntnu.no/api/v4/projects/" + repo.id + "/repository/branches";
  response = await fetch(url, { method: 'GET', headers: { "PRIVATE-TOKEN": repo.token } });
  const status = response.status;

  if (status === 200) {
    console.log("Repo funnet");
    //return (
    //  <BrowserRouter>
    //    <Routes>
    //      <Route path="/" element={<Home />}/>
    //      <Route path="Api" element={<Api />} />
    //      <Route path="RepoVisuals" element={<RepoVisuals />} />
    //      <Route path="Test" element={<Test />} />
    //    </Routes>
    //  </BrowserRouter>
    //);
  } 
  
  else {
    alert("prosjekt-id eller token er feil");
  }

} 

export { response };
export default Login;
// export response

