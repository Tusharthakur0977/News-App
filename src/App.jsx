import React from "react";
import NavBar from "./components/Navbar/NavBar";
import Themebutton from "./components/THemeButton/Themebutton";
import Routing from "./Routing/Routing";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Themebutton />
      <Routing />
    </div>
  );
}

export default App;
