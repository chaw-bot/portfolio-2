import React from 'react';
import Languages from '../components/Languages';
import Frameworks from '../components/Frameworks';
import Skills from '../components/Skills';

const AboutPage = () => (
  <div className="aboutmain">
    <section className="about">
      <header>
        <h1>About me</h1>
      </header>
      <p>
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
      <input type="button" className="resume" value="view my resume" />
    </section>
    <section className="skills">
      <Languages languages={['JavaScript', 'Ruby', 'HTML', 'CSS']} />
      <Frameworks frameworks={['BootStrap', 'ReactJS', 'Ruby on Rails', 'RSpec']} />
      <Skills skills={['GitHub', 'AdobeXD', 'Terminal', 'Team Work', 'Pair Progamming']} />
    </section>
  </div>
);

export default AboutPage;
