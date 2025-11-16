import { useState } from "react";
import { Routes, Route } from "react-router";
import BackgroundCanvas from "./components/BackgroundCanvas";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Contacts from "./routes/Contacts";
import Projects from "./routes/Projects";
import "./App.css";

import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BackgroundCanvas />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
