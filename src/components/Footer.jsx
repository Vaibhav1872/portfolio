import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa';
import '../Style/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socials">
        <a href="https://www.linkedin.com/in/vaibhavbangar1872/"><FaLinkedin /></a>
        <a href="https://github.com/Vaibhav1872"><FaGithub /></a>
        <a href="https://wa.me/919146691458"><FaWhatsapp /></a>
        <a href="https://www.instagram.com/flagship_it_solutions/"><FaInstagram /></a>
        <a href="#"><FaTelegram /></a>
        <a href="#"><FaTwitter /></a>
      </div>
      <p>Pune, India | bangarvaibhav1872@gmail.com </p>
      <p>© 2025 Designed by Vaibhav Bangar</p>
    </footer>
  );
};
export default Footer;