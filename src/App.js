import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import ProjectsPage from './pages/projectsPage';
import projects from './helpers/projectList';
import ServicePage from './pages/servicePage';

const App = () => (
  <div className="App">
    <Router>
      <NavBar />
      <HomePage />
      <AboutPage />
      <ServicePage />
      <ProjectsPage projects={projects} />
      <ContactPage />
    </Router>
  </div>
);

export default App;
