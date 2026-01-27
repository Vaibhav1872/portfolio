import React from 'react';
import { FaLaptopCode, FaGraduationCap, FaAward, FaCertificate } from 'react-icons/fa';
import '../Style/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="exp-section">
      <h2 className="heading">Experience & <span>Certifications</span></h2>
      
      <div className="experience-container">
        {/* Internship Card */}
        <div className="exp-card main-exp">
          <div className="exp-icon"><FaLaptopCode /></div>
          <div className="exp-content">
            <span className="exp-date">Feb 2025 - May 2025</span>
            <h3>Full Stack Web Development Intern</h3>
            <p className="exp-org">CodTech IT Solutions</p>
            <p className="exp-desc">
              Successfully completed a professional internship program focused on 
              building real-world applications using modern web technologies.
            </p>
          </div>
        </div>

        {/* Updated Course Card */}
        <div className="exp-card main-exp">
          <div className="exp-icon"><FaGraduationCap /></div>
          <div className="exp-content">
            <span className="exp-date">2024 - 2025</span>
            <h3>Java Full Stack Developer With AI & ML Course</h3>
            <p className="exp-org">Seed Infotech</p>
            <p className="exp-desc">
              Completed an intensive course in building scalable web applications 
              using Java, Spring, and modern frontend technologies. Focused on 
              industry-standard clean code and architectural patterns.
            </p>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          <div className="cert-card">
            <FaAward className="cert-icon" />
            <div className="cert-info">
              <h4>Java 17 Masterclass</h4>
              <p>Udemy | 2024</p>
            </div>
          </div>

          <div className="cert-card">
            <FaCertificate className="cert-icon" />
            <div className="cert-info">
              <h4>Programming Using Java</h4>
              <p>Infosys Springboard | 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;