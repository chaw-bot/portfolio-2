import React from 'react';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { FaTwitterSquare } from 'react-icons/fa';
import { AiFillMediumCircle } from 'react-icons/ai';

const ContactPage = () => (
  <div className="contactmain">
    <section className="outro">
      <header>
        <h1 className="font-colour">Hey again!</h1>
      </header>
      <p className="text-light">
        I&apos;m always interested in hearing
        about new projects. If you would
        like to chat please get in touch.
      </p>
      <ul className="d-flex justify-content-around contactsocials mt-3">
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
      <h5 className="font-colour mt-5">You could leave me a message☺</h5>
      <form action="https://formspree.io/f/xlezlwgk" method="post" className="d-flex flex-column">
        <input name="text" className="form-input text-light mt-3" placeholder="Full name" required />
        <input name="email" className="form-input text-light mt-3" placeholder="Email" required />
        <textarea name="text" className="form-input text-light mt-3" placeholder="Leave a message..." />
        <input type="submit" className="link-btn p-2 text-light mt-3" value="Get in touch" />
      </form>
    </section>
  </div>
);

export default ContactPage;
