import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from "./pages/RepoVisualsPage";
import Api from "./Api";
import RepoVisuals from "./pages/RepoVisualsPage";
import Test from "./pages/test";
import React from "react";
import { Commits } from "./components/Commits";
import { Issues } from "./components/Issues";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="Issues" element={<Issues />} />
          <Route path="RepoVisuals" element={<RepoVisuals />} />
          <Route path="Test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    );
  }

export default App;
