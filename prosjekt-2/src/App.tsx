import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from "./pages/RepoVisualsPage";
import Api from "./Api";
import RepoVisuals from "./pages/RepoVisualsPage";
import Test from "./pages/test";
import React, {useEffect, useState} from "react";
import Login from "./Login";


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Login" element={<Login />} />
        <Route path="Api" element={<Api />} />
        <Route path="RepoVisuals" element={<RepoVisuals />} />
        <Route path="Test" element={<Test />} />
      </Routes>
    </BrowserRouter>
    );
  }

export default App;
