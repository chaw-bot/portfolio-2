import React from 'react';
import Languages from '../components/Languages';
import Frameworks from '../components/Frameworks';
import Skills from '../components/Skills';
import Resume from "../images/Chawanzi's Resume.pdf";

const AboutPage = () => (
  <div className="aboutmain" id="aboutPage">
    <section className="about">
      <header>
        <h2 className="font-colour">About Me</h2>
      </header>
      <p>
        I&apos;m a front-end developer with a passion for building
        user-friendly interfaces and engaging web experiences.
        Skilled in web development, most JavaScript frameworks, and WordPress,
        I use these tools to bring visions to life.
        Whether it&apos;s crafting robust web apps, seamless mobile apps,
        or dynamic WordPress sites,
        I prioritize modern design and exceptional user experiences.
        I thrive in collaborative environments where clear communication ensures success,
        and I&apos;m eager to contribute to a team focused on technological growth.
      </p>

      <div>
        <a href={Resume} className="p-2 link-btn resume" download target="_blank" rel="noopener noreferrer">VIEW RESUME</a>
        <a href={Resume} className="p-2 link-btn text-light hire" download target="_blank" rel="noopener noreferrer">HIRE ME</a>
      </div>
    </section>
    <section className="skills d-flex flex-row">
      <Frameworks
        frameworks={['BootStrap', 'NextJS', 'ReactJS', 'ReactNative', 'WordPress']}
      />
      <Skills
        skills={[
          'Canva',
          'Figma',
          'Git & GitHub',
          'Mobile Development',
          'Team Work',
          'Pair Programming',
          'Web Development',
          'UI/UX',
        ]}
      />
      <Languages languages={['CSS', 'HTML', 'JavaScript', 'Ruby', 'Ruby on Rails']} />
    </section>
  </div>
);

export default AboutPage;
