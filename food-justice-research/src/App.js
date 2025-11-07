import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import OurResearch from './components/OurResearch';
import Challenges from './components/Challenges';
import CommunityIdeas from './components/CommunityIdeas';
import ResearchPartners from './components/ResearchPartners';
import Footer from './components/Footer';
import Research from './components/Research';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <OurResearch />
              <Challenges />
              <CommunityIdeas />
              <ResearchPartners />
            </>
          } />
          <Route path="/research" element={<Research />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
