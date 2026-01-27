import React from 'react';
import '../Style/Work.css';

const Projects = () => {
  const projects = [
    {
      title: "Library Management System",
      category: "FULL-STACK PROJECT",
      tech: "Angular, Java, Spring Boot, Oracle SQL",
      points: [
        "Developed a full-stack system with Angular frontend and Spring Boot backend for real-time book tracking.",
        "Implemented Role-Based Access Control (RBAC) to distinguish between student and admin permissions.",
        "Designed a normalized Oracle SQL database to manage borrowed books and inventory efficiency."
      ],
      demo: "#"
    },
    {
      title: "Dairy Delight",
      category: "3RD PLACE WINNER",
      tech: "React.js, PHP, Laravel, MySQL",
      points: [
        "Built a robust e-commerce platform for dairy products using React for the UI and Laravel for the API.",
        "Created a vendor-customer interaction portal that placed 3rd in a technical project competition.",
        "Engineered a dynamic ordering system with MySQL database seeding for rapid testing."
      ],
      demo: "#"
    },
    {
      title: "Clothy",
      category: "E-COMMERCE PLATFORM",
      tech: "Laravel, PHP, Blade, MySQL",
      points: [
        "Designed a user-friendly clothing clothing catalog using Laravel Blade templates for server-side rendering.",
        "Implemented secure product management features allowing admins to update inventory and categories.",
        "Optimized responsive design to ensure a seamless shopping experience across mobile and desktop devices."
      ],
      demo: "#"
    }
  ];

  return (
    <section id="work" className="projects-section">
      {/* This heading should only exist ONCE here */}
      <h2 className="heading">Projects <span>Built</span></h2>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p className="project-tech">{project.tech}</p>
              <ul className="project-bullets">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <a href={project.demo} className="view-btn">View Details</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;