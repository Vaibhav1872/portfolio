import React from 'react';
import '../Style/Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="heading">Education</h2>
      <div className="education-container">
        
        <div className="education-card">
          <div className="card-content">
            <h3>Master of Computer Applications</h3>
            <p className="institution">Sinhgad Institute of Management (SIOM), Pune</p>
            <p className="duration">Aug 2023 - June 2025 | Completed</p>
            <p className="grade">CGPA: 6.38</p>
          </div>
        </div>

        <div className="education-card">
          <div className="card-content">
            <h3>Bachelor of Computer Applications</h3>
            <p className="institution">BJS College, Pune</p>
            <p className="duration">Aug 2020 - Apr 2023 | Completed</p>
            <p className="grade">CGPA: 8.06</p>
          </div>
        </div>

      </div>
      
    </section>
  );
};

export default Education;