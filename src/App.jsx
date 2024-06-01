/* eslint-disable no-unused-vars */
import React from 'react';
import AboutMeSection from './components/AboutMeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from "./components/Header";
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import './index.css';

export default function App() {

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutMeSection />
      <ProjectSection />
      <Contact />
      <Footer />
    </div>
  );
}

