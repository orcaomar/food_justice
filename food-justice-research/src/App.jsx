import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { initGA } from './utils/google-analytics';
import Analytics from './components/Analytics';
import Header from './components/Header';
import Hero from './components/Hero';
import Quotes from './components/Quotes';
import OurResearch from './components/OurResearch';
import ChallengesHomepage from './components/Challenges';
import CommunityIdeas from './components/CommunityIdeas';
import ResearchPartners from './components/ResearchPartners';
import Footer from './components/Footer';
import Research from './components/Research';
import GetInvolved from './pages/GetInvolved';
import Challenges from './pages/Challenges';
import IncreasingFoodInsecurity from './pages/IncreasingFoodInsecurity';
import Unaffordability from './pages/Unaffordability';
import LabourMarketExploitation from './pages/LabourMarketExploitation';
import Stigmatization from './pages/Stigmatization';
import EmergencyFoodCharity from './pages/EmergencyFoodCharity';
import PovertyAndCorporateGreed from './pages/PovertyAndCorporateGreed';
import CompetitionAndPowerImbalances from './pages/CompetitionAndPowerImbalances';

function App() {
  useEffect(() => {
    initGA();
  }, []);

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
            <ChallengesHomepage />
            <ResearchPartners />
          </>
        } />
        <Route path="/research" element={<Research />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/challenges/increasing-and-deepening-food-insecurity" element={<IncreasingFoodInsecurity />} />
        <Route path="/challenges/unaffordability" element={<Unaffordability />} />
        <Route path="/challenges/labour-market-exploitation" element={<LabourMarketExploitation />} />
        <Route path="/challenges/stigmatization" element={<Stigmatization />} />
        <Route path="/challenges/emergency-food-charity" element={<EmergencyFoodCharity />} />
        <Route path="/challenges/poverty-corporate-greed" element={<PovertyAndCorporateGreed />} />
        <Route path="/challenges/competition-power-imbalance" element={<CompetitionAndPowerImbalances />} />
        <Route path="/community-ideas" element={<CommunityIdeas />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
