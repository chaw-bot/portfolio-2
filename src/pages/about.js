import React, { useEffect, useRef } from 'react';
import Resume from "../images/Chawanzi's Resume.pdf";

const skills = [
  'Canva',
  'Figma',
  'Git & GitHub',
  'Mobile Development',
  'Team Work',
  'Pair Programming',
  'Web Development',
  'UI/UX Design',
];

const frameworks = [
  'Bootstrap',
  'NextJS',
  'ReactJS',
  'ReactNative',
  'WordPress',
];

const languages = [
  'CSS',
  'HTML',
  'JavaScript',
];

const AboutPage = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const scrollStep = 1; // Pixels to scroll each step
    const scrollSpeed = 30; // Time in milliseconds between scroll steps

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        if (scrollContainer.scrollTop
          >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
          scrollContainer.scrollTop = 0;
        } else {
          // Scroll down
          scrollContainer.scrollTop += scrollStep;
        }
      }
    }, scrollSpeed);

    return () => {
      clearInterval(scrollInterval); // Cleanup the interval on component unmount
    };
  }, []);

  return (
    <div className="aboutmain" id="aboutPage">
      <section className="about">
        <header>
          <h2 className="font-colour about-me">About Me</h2>
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
        <div
          ref={scrollRef}
          style={{
            height: '50vh',
            overflow: 'auto',
          }}
        >
          {/* Skills Section */}
          <div
            style={{
              backgroundColor: '#B9B0BD',
              padding: '20px',
              borderRadius: '5px',
              marginBottom: '10px',
            }}
          >
            <h2 style={{ color: 'white', fontSize: '26px', fontWeight: 700 }}>Skills</h2>
            <div
              style={{
                display: 'flex',
                gap: '20px',
              }}
            >
              {/* Left Column */}
              <div style={{ flex: 1 }}>
                {skills.slice(0, Math.ceil(skills.length / 2)).map((skill) => (
                  <span
                    key={skill}
                    style={{
                      display: 'block',
                      color: 'white',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {/* Right Column */}
              <div style={{ flex: 1 }}>
                {skills.slice(Math.ceil(skills.length / 2)).map((skill) => (
                  <span
                    key={skill}
                    style={{
                      display: 'block',
                      color: 'white',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Frameworks Section */}
          <div
            style={{
              backgroundColor: '#B9B0BD',
              padding: '20px',
              borderRadius: '5px',
              marginBottom: '10px',
            }}
          >
            <h2 style={{ color: 'white', fontSize: '26px', fontWeight: 700 }}>Frameworks</h2>
            <div
              style={{
                display: 'flex',
                gap: '20px',
              }}
            >
              {/* Left Column */}
              <div style={{ flex: 1 }}>
                {frameworks.slice(0, Math.ceil(frameworks.length / 2)).map((framework) => (
                  <span
                    key={framework}
                    style={{
                      display: 'block',
                      color: 'white',
                    }}
                  >
                    {framework}
                  </span>
                ))}
              </div>
              {/* Right Column */}
              <div style={{ flex: 1 }}>
                {frameworks.slice(Math.ceil(frameworks.length / 2)).map((framework) => (
                  <span
                    key={framework}
                    style={{
                      display: 'block',
                      color: 'white',
                    }}
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Languages Section */}
          <div
            style={{
              backgroundColor: '#B9B0BD',
              padding: '20px',
              borderRadius: '5px',
            }}
          >
            <h2 style={{ color: 'white', fontSize: '26px', fontWeight: 700 }}>Languages</h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              {languages.map((language) => (
                <span
                  key={language}
                  style={{
                    color: 'white',
                  }}
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default AboutPage;
