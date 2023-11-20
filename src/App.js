import React from "react"
import './App.css';
import Nav from "./components/Nav"
import Header from "./components/Header";
import About from "./components/About"
import Projects from "./components/Projects";
import Footer from "./components/Footer"
import { AnimatePresence } from "framer-motion";
import Transition from "./components/Transition"

function App() {
  return (

    <div className="App">
      <div id="container">
      <AnimatePresence mode="wait">
        <Transition key="header">
          <Header />
        </Transition>

        <Transition key="about">
          <About />
        </Transition>

        <Transition key="projects">
          <Projects />
        </Transition>

        <Footer />
        </AnimatePresence>     
      </div>

      <Nav />
    </div>

  );
}

export default App;
