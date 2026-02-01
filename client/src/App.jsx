import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

import SportsTech from './pages/SportsTech';
import Team from './pages/Team';
import Contact from './pages/Contact';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />

          <Route path="/future-vision" element={<SportsTech />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
