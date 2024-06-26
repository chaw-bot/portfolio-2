/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { FaTwitterSquare } from 'react-icons/fa';
import { AiFillMediumCircle } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';

const HomePage = () => (
  <div className="homemain" id="homePage">
    <section className="intro">
      <header>
        {/* <h1 className="font-colour">Hey there!</h1> */}
        <h3>Chawanzi Ng&apos;uni</h3>
        <h4>Front-End Developer</h4>
        <br />
        <h4 className="call-to-action">Building beautiful & user-friendly experiences.</h4>
      </header>
      <p>
        I design and code user-friendly products, features, and websites.
        Explore my work and experience - if you have a project in mind, let&apos;s chat!
      </p>
    </section>
    <section className="socials">
      <ul className="d-flex justify-content-around">
        <li>
          <a href="https://www.linkedin.com/in/chawanzi-ng-uni/" target="_blank" rel="noreferrer">
            <SiLinkedin className="icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/chaw-bot" target="_blank" rel="noreferrer">
            <SiGithub className="icon_second" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/chawfronaut" target="_blank" rel="noreferrer">
            <FaTwitterSquare className="icon_third" />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@afrononymous" target="_blank" rel="noreferrer">
            <AiFillMediumCircle className="icon_fourth" />
          </a>
        </li>
        <li>
          <a href="mailto:nwanzi5@gmail.com" target="_blank" rel="noreferrer">
            <IoMdMail className="icon_fifth" />
          </a>
        </li>
      </ul>
    </section>
  </div>
);

export default HomePage;
