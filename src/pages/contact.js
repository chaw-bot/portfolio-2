/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  FaLinkedin, FaGithub, FaEnvelope, FaMedium,
} from 'react-icons/fa';
import { Link } from 'react-scroll';
import astroImage from '../images/chaw.png';
import navLinks from '../helpers/links';

const ContactPage = () => (
  <div className="contactmain" id="contactPage">
    <section
      className="image"
      style={{
        backgroundImage: `url(${astroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '30%',
        height: '60%',
      }}
    />
    <section className="contact">
      <h4 className="usefull-links">Contact</h4>
      <ul className="contact-socials">
        <li className="cont-links">
          <a href="https://www.linkedin.com/in/chawanzi-ng-uni/" target="_blank" rel="noreferrer">
            <FaLinkedin color="#381B46" size={25} />
            <span className="social-link usefull-links">linkedin.com/in/chawanzi-ng-uni/</span>
          </a>
        </li>
        <li className="cont-links">
          <a href="https://www.github.com/chaw-bot" target="_blank" rel="noreferrer">
            <FaGithub color="#381B46" size={25} className="social-link" />
            <span className="social-link usefull-links">chaw-bot</span>
          </a>
        </li>
        <li className="cont-links">
          <a href="mailto:chawanzi.dev@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope color="#381B46" size={25} className="social-link" />
            <span className="social-link usefull-links">chawanzi.dev@gmail.com</span>
          </a>
        </li>
        <li className="cont-links">
          <a href="https://www.medium.com/@afrononymous" target="_blank" rel="noreferrer">
            <FaMedium color="#381B46" size={25} className="social-link" />
            <span className="social-link usefull-links">@afrononymous</span>
          </a>
        </li>
      </ul>
    </section>
    <section className="contact usefull-links">
      <h4>Useful Links</h4>
      <ul>
        {navLinks.map((link) => (
          <li key={link.id} className="cont-links">
            <Link className="social-link" to={link.pageName} smooth duration={500} activeclassname="active-link">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default ContactPage;
