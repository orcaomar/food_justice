import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Analytics from './components/Analytics';
import Header from './components/Header';
import Hero from './components/Hero';
import Quotes from './components/Quotes';
import OurResearch from './components/OurResearch';
import ChallengesHomepage from './components/Challenges';
import ResearchPartners from './components/ResearchPartners';
import Footer from './components/Footer';

const Research = lazy(() => import('./components/Research'));
const GetInvolved = lazy(() => import('./pages/GetInvolved'));
const Challenges = lazy(() => import('./pages/Challenges'));
const IncreasingFoodInsecurity = lazy(() => import('./pages/IncreasingFoodInsecurity'));
const Unaffordability = lazy(() => import('./pages/Unaffordability'));
const LabourMarketExploitation = lazy(() => import('./pages/LabourMarketExploitation'));
const Stigmatization = lazy(() => import('./pages/Stigmatization'));
const EmergencyFoodCharity = lazy(() => import('./pages/EmergencyFoodCharity'));
const PovertyAndCorporateGreed = lazy(() => import('./pages/PovertyAndCorporateGreed'));
const CompetitionAndPowerImbalances = lazy(() => import('./pages/CompetitionAndPowerImbalances'));
const CommunityIdeas = lazy(() => import('./components/CommunityIdeas'));

function App() {
  return (
    <div className="App">
      <Analytics />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
