import React from "react"
import './App.css';
import Nav from "./components/Nav"
import Header from "./components/Header";
import About from "./components/About"
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <div id="container">
        <Header />
        <About />
        <Projects />
      </div>
      <Nav />
    </div>
  );
}

export default App;
