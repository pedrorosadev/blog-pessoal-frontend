import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Navbar } from "./components/statics/navbar/Navbar";

function App() {
  const nome = "Pedro";
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
