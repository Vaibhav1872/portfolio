import React from 'react';
import '../Style/About.css';
import profilePic from '../assets/Vaibhav.jpg'; 
import { FaExternalLinkAlt } from 'react-icons/fa'; // Added for professional look

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="heading">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I am a <strong>detail-oriented Full-Stack Developer</strong> with strong hands-on experience in building web applications using Java, Spring Boot, Angular, React.js, PHP, and Laravel.
          </p>
          <p>
            My focus is on developing <strong>secure, scalable, and user-friendly</strong> applications with clean code and optimized database interactions.
          </p>
          <p>
            Currently, I am looking to apply my skills in a professional environment where I can contribute to meaningful projects and continue growing as a developer.
          </p>
          
          <div className="about-highlights">
            <ul>
              <li>Clean Code & Naming Conventions</li>
              <li>Responsive Web Design</li>
              <li>Database Optimization (SQL/NoSQL)</li>
              <li>API Development & Integration</li>
            </ul>
          </div>

          {/* NEW: Resume Button */}
          <div className="about-btn-container">
            <a 
              href="https://tomato-gerianna-63.tiiny.site" 
              target="_blank" 
              rel="noreferrer" 
              className="resume-btn"
            >
              View My Resume <FaExternalLinkAlt className="btn-icon" />
            </a>
          </div>
        </div>
        
        <div className="about-image-container">
          <div className="image-wrapper">
            <img src={profilePic} alt="Vaibhav Bangar" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;