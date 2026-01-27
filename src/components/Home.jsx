import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram, FaTelegram, FaTwitter, FaArrowCircleDown } from 'react-icons/fa';
import aiImage from '../assets/AI.png';
import '../Style/Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        {/* Left Side: Content */}
        <div className="home-left">
          <p className="intro">Hi There, I'm</p>
          <h1 className="name">Vaibhav <span className="highlight">Bangar</span></h1>
          
          <h2 className="typing-container">
            I Am Into <span className="animated-text">
              <Typewriter
                words={['Java Full Stack', 'CS Fundamentals', 'Data Structures', 'Software Development', 'Mern Stack']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <div className="home-btns">
            <a href="#about" className="about-btn">
              About Me <FaArrowCircleDown style={{ marginLeft: '10px' }} />
            </a>

            <div className="social-icons">
              <a href="https://www.linkedin.com/in/vaibhavbangar1872/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/Vaibhav1872" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://wa.me/919146691458" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
              <a href="https://www.instagram.com/flagship_it_solutions/" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="#" target="_blank" rel="noreferrer"><FaTelegram /></a>
              <a href="#" target="_blank" rel="noreferrer"><FaTwitter /></a>
            </div>
          </div>
        </div>

        {/* Right Side: AI Image */}
        <div className="home-image">
         <img src={aiImage} alt="AI Processor" className="ai-img" />
       </div>
       </div>
    </section>
  );
};

export default Home;