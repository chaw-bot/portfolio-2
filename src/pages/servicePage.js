import React from 'react';
import frontend from '../images/frontend.png';
import ux from '../images/ui:ux.png';
import mobile from '../images/mobile.png';

const ServicePage = () => (
  <div className="services" id="servicePage">
    <section className="about">
      <header>
        <h2 className="font-colour">My Services</h2>
      </header>
      <h4>Bridging design and development to create seamless, user-focused digital experiences.</h4>
    </section>
    <section className="servicesContainer">
      <div className="box">
        <img src={frontend} alt="Icon" />
        <h4>Frontend Development</h4>
        <p>
          I create responsive and dynamic web applications,
          ensuring a seamless user experience across all devices.
        </p>
      </div>
      <div className="box">
        <img src={ux} alt="Icon" />
        <h4>UI/UX Design</h4>
        <p>
          Designing intuitive and engaging user interfaces with
          a focus on user experience, wire framing, and prototyping.
        </p>
      </div>
      <div className="box">
        <img src={mobile} alt="Icon" />
        <h4>Mobile App Design</h4>
        <p>
          I design user-friendly and visually appealing mobile applications
          that prioritize usability and engagement.
        </p>
      </div>
    </section>
  </div>
);

export default ServicePage;
