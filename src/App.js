import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import ProjectsPage from './pages/projectsPage';
import projects from './helpers/projectList';

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/projectsPage" element={<ProjectsPage projects={projects} />} />
      <Route path="/aboutPage" element={<AboutPage />} />
      <Route path="/contactPage" element={<ContactPage />} />
    </Routes>
  </Router>
);

export default App;
