import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import 'hover.css/css/hover-min.css';
import Header from './components/Header';
import Information from './pages/Information';
import { AboutMe } from './pages/AboutMe';
import { Footer } from './components/Footer';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import 'react-toastify/dist/ReactToastify.css';
AOS.init(); // Initialize AOS

function App() {
 

  return (
    <div>
      <Header  />
      <Information />
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    
      
    </div>
  );
}

export default App;
