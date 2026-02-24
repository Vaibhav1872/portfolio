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
      title: "Clothy (E-Commerce)",
      category: "FULL-STACK PLATFORM",
      tech: "Java, Spring Boot, React.js, Oracle, Rest API",
      points: [
        "Developed a user-friendly clothing platform with authentication, product catalogs, and secure checkout features.",
        "Built robust REST APIs for users, products, cart, and orders to ensure seamless data flow.",
        "Created an Admin panel with CRUD operations for managing products and users, integrated with an Oracle database schema."
      ],
      demo: "#"
    },
    {
      title: "WebReach Backlinking",
      category: "SEO & CMS PLATFORM",
      tech: "WordPress, PHP, MySQL, SEO, Google Analytics, Cloudflare",
      points: [
        "Developed a content-driven WordPress site with optimized theme customization and backlinking strategies.",
        "Implemented advanced SEO strategies including sitemap configuration and performance optimization to boost search rankings.",
        "Configured hosting, domain management, and Cloudflare security while integrating Google Analytics and Search Console for traffic monitoring."
      ],
      demo: "#"
    }
  ];

  return (
    <section id="work" className="projects-section">
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