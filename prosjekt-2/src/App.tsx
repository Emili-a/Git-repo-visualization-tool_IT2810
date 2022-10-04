import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from "./pages/RepoVisualsPage";
import Api from "./Api";
import RepoVisuals from "./pages/RepoVisualsPage";
import Test from "./pages/test";
import React, {useEffect, useState} from "react";
import Login from "./Login";
import { Commits } from "./components/Commits";
import { Issues } from "./components/Issues";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const [token, setToken] = useLocalStorage("token", "");

  if(!token) {
    return (
    <div className="App">
      <Login />
    </div>
    )
  } else {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="Login" element={<Login />} />
          <Route path="Issues" element={<Issues />} />
          <Route path="RepoVisuals" element={<RepoVisuals />} />
          <Route path="Test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
