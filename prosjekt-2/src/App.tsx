import React from "react";
import RepoVisuals from "./pages/RepoVisualsPage";
import Login from "./Login";
import { useLocalStorage } from "./useLocalStorage";

//Browser routing er basert på model fra: https://www.w3schools.com/react/react_router.asp

function App() {
  const [token, setToken] = useLocalStorage("token", "");

  if (!token) {
    return (
      <div className="App">
        <Login />
      </div>
    )
  } else {

    return (
      <RepoVisuals />
    )
  }
}
export default App;
