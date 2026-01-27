import React from 'react';
import '../Style/Skills.css';

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: "https://img.icons8.com/color/48/html-5--v1.png" },
    { name: "CSS3", icon: "https://img.icons8.com/color/48/css3.png" },
    { name: "Sass", icon: "https://img.icons8.com/color/48/sass.png" },
    { name: "Bootstrap", icon: "https://img.icons8.com/color/48/bootstrap.png" },
    { name: "TailwindCSS", icon: "https://img.icons8.com/color/48/tailwind_css.png" },
    { name: "JavaScript", icon: "https://img.icons8.com/color/48/javascript--v1.png" },
    { name: "jQuery", icon: "https://img.icons8.com/ios-filled/48/0078ff/jquery.png" },
    { name: "ReactJS", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" },
    { name: "Redux", icon: "https://img.icons8.com/color/48/redux.png" },
    { name: "NextJS", icon: "https://img.icons8.com/color/48/nextjs.png" },
    { name: "React Native", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" },
    { name: "WordPress", icon: "https://img.icons8.com/color/48/wordpress.png" },
    { name: "NodeJS", icon: "https://img.icons8.com/color/48/nodejs.png" },
    { name: "ExpressJS", icon: "https://img.icons8.com/color/48/express-js.png" },
    { name: "PHP", icon: "https://img.icons8.com/officel/48/php-logo.png" },
    { name: "Spring Boot", icon: "https://img.icons8.com/color/48/spring-logo.png" },
    { name: "Microservices", icon: "https://img.icons8.com/color/48/api-settings.png" },
    { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
    { name: "MySQL", icon: "https://img.icons8.com/color/48/mysql-logo.png" },
    { name: "MongoDB", icon: "https://img.icons8.com/color/48/mongodb.png" },
    { name: "Firebase", icon: "https://img.icons8.com/color/48/firebase.png" },
    { name: "Google Cloud", icon: "https://img.icons8.com/color/48/google-cloud-platform.png" },
    { name: "C", icon: "https://img.icons8.com/color/48/c-programming.png" },
    { name: "C++", icon: "https://img.icons8.com/color/48/c-plus-plus.png" },
    { name: "Java", icon: "https://img.icons8.com/color/48/java-coffee-cup-logo.png" },
    { name: "Python", icon: "https://img.icons8.com/color/48/python--v1.png" },
    { name: "OOPS", icon: "https://img.icons8.com/color/48/java-coffee-cup-logo.png" },
    { name: "DSA", icon: "https://img.icons8.com/external-flatart-icons-flat-flatarticons/48/external-algorithm-data-science-and-cyber-security-flatart-icons-flat-flatarticons.png" },
    { name: "DBMS", icon: "https://img.icons8.com/color/48/database.png" },
    { name: "OS", icon: "https://img.icons8.com/color/48/operating-system.png" },
    { name: "Networks", icon: "https://img.icons8.com/color/48/network.png" },
    { name: "System Design", icon: "https://img.icons8.com/color/48/workflow.png" },
    { name: "Git VCS", icon: "https://img.icons8.com/color/48/git.png" },
    { name: "GitHub", icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png" },
    { name: "Postman", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" },
    { name: "Netlify", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-color-tal-revivo.png" },
    { name: "SolidWorks", icon: "https://img.icons8.com/color/48/solidworks.png" },
    { name: "AutoCad", icon: "https://img.icons8.com/color/48/autocad.png" }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span>
      </h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            <img src={skill.icon} alt={skill.name} />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;