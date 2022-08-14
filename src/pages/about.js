import React from 'react';
import Languages from '../components/Languages';
import Frameworks from '../components/Frameworks';
import Skills from '../components/Skills';
import Resume from "../images/Chawanzi's Resume.pdf";

const AboutPage = () => (
  <div className="aboutmain" id="aboutPage">
    <section className="about">
      <header>
        <h1 className="font-colour">About me</h1>
      </header>
      <p className="text-light">
        I am a dev who is passionate about front-end development and design. I
        enjoy turning design templates into functional code that people can use smoothly
        whilst enjoying the experience. I am fluent in multiple programming
        languages, frameworks,and technologies and capable of ramping up
        quickly and efficiently.

        {/* I am a fast learner and I enjoy learning new
        things. I enjoy pair programming and remote work. If you like what you
        see and have a project you need coded, don’t hesitate to contact me. */}
      </p>

      <a href={Resume} className="p-2 link-btn text-light resume" download>view my resume</a>
    </section>
    <section className="skills d-flex flex-column">
      <Languages languages={['JavaScript', 'Ruby', 'HTML', 'CSS']} />
      <Frameworks
        frameworks={['BootStrap', 'ReactJS', 'Ruby on Rails', 'RSpec']}
      />
      <Skills
        skills={[
          'GitHub',
          'AdobeXD',
          'Terminal',
          'Team Work',
          'Pair Progamming',
        ]}
      />
    </section>
  </div>
);

export default AboutPage;
