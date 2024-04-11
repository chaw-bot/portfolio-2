import React from 'react';
import Languages from '../components/Languages';
import Frameworks from '../components/Frameworks';
import Skills from '../components/Skills';
import Resume from "../images/Chawanzi's Resume.pdf";

const AboutPage = () => (
  <div className="aboutmain" id="aboutPage">
    <section className="about">
      <header>
        <h2 className="font-colour">About me</h2>
      </header>
      <p>
        I&lsquo;m a passionate front-end developer fueled by a love
        for building user-friendly interfaces and web experiences.
        With expertise in web development, React Native mobile apps,
        and WordPress, I leverage my skills in HTML, CSS, JavaScript,
        and React.js to bring your vision to life.
        Whether it&lsquo;s building robust web applications,
        creating seamless cross-platform mobile apps,
        or crafting engaging WordPress websites,
        I&lsquo;m dedicated to modern design principles and exceptional user experiences.

        I thrive in collaborative environments and
        prioritize clear communication to ensure project success.
        I&lsquo;m eager to join a team where
        I can contribute my expertise and help drive technological growth.
      </p>

      <a href={Resume} className="p-2 link-btn text-light resume" download>Resume</a>
    </section>
    <section className="skills d-flex flex-column">
      <Languages languages={['HTML', 'CSS', 'JavaScript', 'Ruby', 'Ruby on Rails']} />
      <Frameworks
        frameworks={['BootStrap', 'ReactJS', 'Redux', 'NextJS', 'ReactNative', 'WordPress']}
      />
      <Skills
        skills={[
          'Git & GitHub',
          'Figma',
          'Canva',
          'Team Work & Pair Programming',
          'Web Development & Mobile Application Development',
          'UI/UX',
        ]}
      />
    </section>
  </div>
);

export default AboutPage;
