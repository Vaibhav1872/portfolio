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
    // --- 1. DISABLE RIGHT CLICK ---
    // Prevents visitors from inspecting your code or saving images
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);

    // --- 2. DETAILED VISITOR TRACKING ---
    const trackVisitor = async () => {
      try {
        // Step A: Get basic IP info and coordinates
        const ipRes = await fetch('https://ipapi.co/json/');
        const ipData = await ipRes.json();
        const { latitude, longitude } = ipData;

        // Step B: Find Nearest Landmark/Area Name (Reverse Geocoding)
        // Uses the latitude and longitude to find a suburb, village, or road name.
        const geoRes = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
          { headers: { 'User-Agent': 'Vaibhav-Portfolio-Tracker' } }
        );
        const geoData = await geoRes.json();

        // Extracts the most specific area name from the address results
        const areaName = geoData.address.suburb || 
                         geoData.address.neighbourhood || 
                         geoData.address.village || 
                         geoData.address.subdistrict || 
                         geoData.address.road || 
                         "Local Area";

        // Step C: Prepare data for Google Sheet
        const formData = new FormData();
        formData.append('ip', ipData.ip);
        formData.append('city', ipData.city);
        formData.append('state', ipData.region);
        formData.append('pincode', ipData.postal);
        formData.append('org', ipData.org);
        formData.append('landmark', areaName); // Matches 'data.landmark' in your Script

        // Step D: Send data to your NEW Google Web App URL
        fetch('https://script.google.com/macros/s/AKfycbxZbSaU2nHrhdzFOsiM0yi-QW0No44vLZwTUhYi4pIEhCce68ou02E4P99JWrGeo_0/exec', {
          method: 'POST',
          body: formData,
          mode: 'no-cors' // Necessary for Google Apps Script to bypass CORS
        });

      } catch (err) {
        console.log("Tracking restricted or blocked by browser settings.");
      }
    };

    trackVisitor();

    // CLEANUP: Removes the listener when the component is destroyed
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
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