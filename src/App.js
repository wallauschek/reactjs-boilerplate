import React from "react";

import TechList from "./components/TechList";

import "./App.css";

import image from "./assets/Flying.jpg";

function App() {
  return (
    <div>
      <TechList />
      <img src={image} />
    </div>
  );
}

export default App;
