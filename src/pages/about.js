import React from 'react';
import Languages from '../components/Languages';
import Frameworks from '../components/Frameworks';
import Skills from '../components/Skills';

const AboutPage = () => (
  <div className="aboutmain" id="aboutPage">
    <section className="about">
      <header>
        <h1 className="font-colour">About me</h1>
      </header>
      <p className="text-light">
        Hello I’m a Web developer! I can help you build and design a product ,
        feature or website Look through some of my work and experience! If
        you like what you see and have a project you need coded, don’t
        hestiate to contact me.
      </p>
      <a href="https://docs.google.com/document/d/1l4HHhjHjOCPIOxeI3rggq43b-GInXkReneOMgc1fEgU/edit?usp=sharing" target="_blank" rel="noreferrer">
        <input type="button" className="p-2 link-btn text-light resume" value="view my resume" />
      </a>
    </section>
    <section className="skills d-flex flex-column">
      <Languages languages={['JavaScript', 'Ruby', 'HTML', 'CSS']} />
      <Frameworks frameworks={['BootStrap', 'ReactJS', 'Ruby on Rails', 'RSpec']} />
      <Skills skills={['GitHub', 'AdobeXD', 'Terminal', 'Team Work', 'Pair Progamming']} />
    </section>
  </div>
);

export default AboutPage;
