import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <OurResearch />
            <Challenges />
            <ResearchPartners />
          </>
        } />
        <Route path="/research" element={<Research />} />
        <Route path="/community-ideas" element={<CommunityIdeas />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
