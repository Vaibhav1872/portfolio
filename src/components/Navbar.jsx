import React, { useState, useEffect } from 'react';

import '../Style/Navbar.css';



const Navbar = () => {

  const [activeNav, setActiveNav] = useState('#home');



  useEffect(() => {

    const handleScroll = () => {

      // Must match your section IDs exactly

      const sections = ['home', 'about', 'skills', 'education', 'work', 'experience', 'contact'];



      // Increased to 110 to match the scroll-margin-top logic

      const scrollPos = window.scrollY + 110;



      sections.forEach(section => {

        const element = document.getElementById(section);

        if (element) {

          const offsetTop = element.offsetTop;

          const height = element.offsetHeight;



          // Check if scroll is within the visible bounds of this section

          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {

            setActiveNav(`#${section}`);

          }

        }

      });

    };



    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);



  return (

    <nav className="navbar">

      {/* Clickable Brand Name */}

      <a href="#home" className="nav-logo" onClick={() => setActiveNav('#home')}>

        VAIBHAV

      </a>



      <ul className="nav-links">

        {['Home', 'About', 'Skills', 'Education', 'Work', 'Experience', 'Contact'].map((item) => {

          const id = `#${item.toLowerCase()}`;

          return (

            <li key={item}>

              <a

                href={id}

                onClick={() => setActiveNav(id)}

                className={activeNav === id ? 'active' : ''}

              >

                {item}

              </a>

            </li>

          );

        })}

      </ul>

    </nav>

  );

};



export default Navbar;