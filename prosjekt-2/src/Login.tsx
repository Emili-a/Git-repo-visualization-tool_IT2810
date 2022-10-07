import React, {useState} from 'react';
import './App.css';
import { useLocalStorage } from "./useLocalStorage";
import './styles/login.css';


interface gitrepo {
  id: string;
  token: string;
}

const Login = () => {
  const [storageId, setStorageId] = useLocalStorage("id", "");
  const [storageToken, setStorageToken] = useLocalStorage("token", "");
  const [result, setResult] = useState("");

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
      window.location.reload();
      setResult("");
    
    } 
    
    else {
      if (result == "Prosjekt-id eller token er feil") {
        setResult("Prosjekt-id eller token er feil, prøv igjen");
      }
      else {setResult("Prosjekt-id eller token er feil")}
    }
  }

  return (
    <div className="Login">
      <h1>Check info about gitlab repo</h1>
      <h3>Type in project-id</h3>
      <input id="id" type="text" placeholder="Project-id"/>
      <h3>Type in personal access token</h3>
      <input id="token" type="text" placeholder="Personal access token"/>
      <br></br>
      <button onClick={CheckRepo} id="login_button">Check repo</button>
      <h4 id="result">{result}</h4>
    </div>
  );
}
export default Login;
