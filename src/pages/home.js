/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import astroImage from '../images/astro.png';
import Resume from "../images/Chawanzi's Resume.pdf";

const HomePage = () => (
  <div className="homemain" id="homePage">
    <section className="intro">
      <header>
        <h3>Hi, I&apos;m Chawanzi Ng&apos;uni</h3>
        <br />
        <h4 className="call-to-action">
          Frontend Developer &
          <span> UI/UX Designer</span>
        </h4>
      </header>
      <p>
        I design and code user-friendly products, features, and websites.
        Explore my work and experience - if you have a project in mind, let&apos;s chat!
      </p>
      <div>
        <a href={Resume} className="p-2 link-btn resume" download target="_blank" rel="noopener noreferrer">VIEW RESUME</a>
        <a href={Resume} className="p-2 link-btn text-light hire" download target="_blank" rel="noopener noreferrer">HIRE ME</a>
      </div>
    </section>
    <section
      className="image"
      style={{
        backgroundImage: `url(${astroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '40%',
        height: '80%',
        display: window.innerWidth <= 768 ? 'none' : 'block',
      }}
    />
  </div>
);

export default HomePage;
