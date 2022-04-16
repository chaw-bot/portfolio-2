import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import ProjectsPage from './pages/projectsPage';
import projects from './helpers/projectList';

const App = () => (
  <Router>
    <NavBar />
    <HomePage />
    <ProjectsPage projects={projects} />
    <AboutPage />
    <ContactPage />
  </Router>
);

export default App;
