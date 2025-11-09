import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Analytics from './components/Analytics';
import Header from './components/Header';
import Hero from './components/Hero';
import Quotes from './components/Quotes';
import OurResearch from './components/OurResearch';
import Challenges from './components/Challenges';
import CommunityIdeas from './components/CommunityIdeas';
import ResearchPartners from './components/ResearchPartners';
import Footer from './components/Footer';
import Research from './components/Research';
import GetInvolved from './pages/GetInvolved';
import ChallengesPage from './pages/Challenges';
import IncreasingFoodInsecurity from './pages/IncreasingFoodInsecurity';

function App() {
  return (
    <div className="App">
      <Analytics />
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Quotes />
            <OurResearch />
            <Challenges />
            <ResearchPartners />
          </>
        } />
        <Route path="/research" element={<Research />} />
        <Route path="/challenges" element={<ChallengesPage />} />
        <Route path="/challenges/increasing-and-deepening-food-insecurity" element={<IncreasingFoodInsecurity />} />
        <Route path="/community-ideas" element={<CommunityIdeas />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
