import React from 'react';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { FaTwitterSquare } from 'react-icons/fa';
import { AiFillMediumCircle } from 'react-icons/ai';

const ContactPage = () => (
  <div className="contactmain">
    <section className="outro">
      <header>
        <h1>Hey again!</h1>
      </header>
      <p>
        I&apos;m always interested in hearing
        about new projects. If you would
        like to chat please get in touch.
      </p>
      <ul className="contactsocials">
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
      </ul>
    </section>
    <section>
      <form action="wait a minute" className="form">
        <input type="text" className="name" placeholder="Full name" />
        <input type="email" className="email" placeholder="Email" />
        <input type="text" className="msg" placeholder="Leave a message..." />
        <input type="submit" value="Get in touch" />
      </form>
    </section>
  </div>
);

export default ContactPage;
