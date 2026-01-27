import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import Experience from './components/Experience';

function App() {
  useEffect(() => {
    // 1. Prevent Right-Click Menu
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // 2. Prevent Developer Tools Shortcuts (F12, Ctrl+Shift+I, etc.)
    const handleKeyDown = (e) => {
      if (
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || 
        (e.ctrlKey && e.key === 'u')
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    // Clean up listeners when the component is destroyed
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <ParticlesBackground />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Work />
      <Experience/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;