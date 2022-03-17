import React from 'react';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { FaTwitterSquare } from 'react-icons/fa';
import { AiFillMediumCircle } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';

const HomePage = () => (
  <div className="homemain">
    <section className="intro">
      <header>
        <h1 className="font-colour">Hey there!</h1>
        <h3 className="font-colour">I&apos;m Chawanzi Ng&apos;uni</h3>
        <h4 className="font-colour">Full Stack Developer</h4>
      </header>
      <p className="text-light mt-3">
        I can help you build a product,
        feature, or website as well as design
        it. Look through some of my work
        and experience. If you like what you
        see and have a project you need
        coded, do not hesitate to contact me.
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
            <FaTwitterSquare className="icon" />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@afrononymous" target="_blank" rel="noreferrer">
            <AiFillMediumCircle className="icon_second" />
          </a>
        </li>
        <li>
          <a href="add link to contact page">
            <IoMdMail className="icon" />
          </a>
        </li>
      </ul>
    </section>
  </div>
);

export default HomePage;
