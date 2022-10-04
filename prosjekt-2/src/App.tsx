import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from "./pages/RepoVisualsPage";
import Api from "./Api";
import RepoVisuals from "./pages/RepoVisualsPage";
import Test from "./pages/test";
import React, {useEffect, useState} from "react";
import Login from "./Login";
import {response} from "./Login";


const useFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    


function App() {
  if (response.status != 200) {
    var display = <Login></Login>
  }
  else {
    var display =
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Api" element={<Api />} />
        <Route path="RepoVisuals" element={<RepoVisuals />} />
        <Route path="Test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  }
  return (
      {display}
    );
  }

export default App;
