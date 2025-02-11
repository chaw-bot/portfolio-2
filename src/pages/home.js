/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import astroImage from '../images/astro.png';
import Resume from "../images/Chawanzi's Resume.pdf";

const HomePage = () => (
  <div className="homemain" id="homePage">
    <section className="intro">
      <p style={{
        fontWeight: 200,
      }}
      >
        I design and build seamless digital experiences.
      </p>
      <p style={{
        fontWeight: 900,
      }}
      >
        Let&apos;s collaborate to bring your vision to life.
      </p>
      <div style={{
        marginTop: '30px',
      }}
      >
        <a href="mailto:chawanzi.dev@gmail.com?subject=Project Inquiry" className="p-2 link-btn text-light hire" target="_blank" rel="noopener noreferrer">Hire Me 🏁</a>
        <a href={Resume} className="p-2 link-btn resume" download target="_blank" rel="noopener noreferrer">View Resume</a>
      </div>
    </section>
    <section
      className="image animated-section"
      style={{
        backgroundImage: `url(${astroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: window.innerWidth <= 768 ? 'none' : 'block',
      }}
    />
  </div>
);

export default HomePage;
