import React from 'react';
import './Research.css';
import headerBg from '../assets/research/DQaUHWzldUNQUDV8Bk1igtA3s.jpg';
import projectGoalsImg from '../assets/research/cjRR1Ssh7HNarcSqiHBa4XK6Us.jpg';
import actionPlanImg from '../assets/research/ZmnNohA0Ep8HWcizFZaeBOYFHg.jpg';
import luannImg from '../assets/research/iEPxox514vmq2re5m1VYua1nYY.jpeg';
import omarImg from '../assets/research/mrPmoma8Y0m7QjiDXyKdr7Imc.jpg';
import safeeraImg from '../assets/research/8O5XGyZcf1zQnohczPYDF1ceMA.png';

const Research = () => {
  console.log('Research component is rendering');
  return (
    <div className="research-container">
      <header className="research-header" style={{ backgroundImage: `url(${headerBg})` }}>
        <h1>Our Research</h1>
        <p>This research – past and present – belongs to the community. We designed our research methods and questions to address research needs identified by residents and workers.</p>
      </header>

      <section className="what-we-learned">
        <h2>What We Learned</h2>
      </section>

      <section className="testimonials">
        <div className="card">
          <h3><a href="https://foodjusticeresearch.ca/challenges-developing-severity">Increasing and deepening food insecurity</a></h3>
          <p>Many more individuals and families in Flemingdon Park and Thorncliffe Park rely on emergency food distribution services since the ongoing dual crisis – public health and inflation – of the pandemic. And food insecurity is about so much more than food.</p>
        </div>
        <div className="card">
          <h3><a href="https://foodjusticeresearch.ca/challenges-stigmatization">The stigmatization, shame, and indignity of food insecurity</a></h3>
          <p>Charity, in the form of emergency food distribution programs, comes with surveillance, judgment, and devaluation, and does nothing to address underlying needs.</p>
        </div>
        <div className="card">
          <h3><a href="https://foodjusticeresearch.ca/challenges-emergency-food-charity">Emergency Food Charity</a></h3>
          <p>Residents encouraged researchers and workers to adopt a self-critical perspective, to consider the ways in which we are part of the system that maintains food insecurity for certain individuals and groups.</p>
        </div>
        <div className="card">
          <h3><a href="https://foodjusticeresearch.ca/challenges-unaffordability">The unaffordability of everyday necessities</a></h3>
          <p>A devastating reality for families is high (and rising) rent, even for small and unsuitable housing; increased food prices, especially since the pandemic; in combination with steadily inadequate (or declining) family income.</p>
        </div>
        <div className="card">
          <h3><a href="https://foodjusticeresearch.ca/challenges-competition-power-imbalance">Structured competition, power imbalances, and fragmentation</a></h3>
          <p>Cooperation and collaboration among agencies and grassroots initiatives are undermined by competitive and short-term funding of social programs and barriers to decision-making and influence.</p>
        </div>
        <div className="card">
          <h3><a href="https://foodjusticeresearch.ca/challenges-labour-market-exploitation">Labour market exclusion and exploitation</a></h3>
          <p>Employment opportunities, especially for immigrants and refugees, are limited to low-wage precarious jobs. Credentials are often not recognized.</p>
        </div>
        <div className="card">
          <h3><a href="https://foodjusticeresearch.ca/challenges-poverty-corporate-greed">Every day and every night, poverty feeds corporate greed</a></h3>
          <p>The system is rigged to sustain and increase the wealth of a few and the dispossession of many.</p>
        </div>
      </section>

      <section className="project-goals">
        <div className="content">
          <h2>Project Goals</h2>
          <p><strong>Document and mitigate</strong> the immediate and long-term “viral inequality” of the pandemic by understanding and chronicling the experiences of food insecurity and economic.</p>
          <p><strong>Establish a base of evidence</strong> to inform the community’s further development of food justice and inclusive economic development initiatives.</p>
          <p><strong>Build capacity</strong> of local agencies and residents through community leadership and co-creation in all stages of the research, including paid positions for community researchers.</p>
        </div>
        <div className="image-container">
          <img src={projectGoalsImg} alt="Project Goals" />
        </div>
      </section>

      <section className="action-plan">
        <div className="image-container">
          <img src={actionPlanImg} alt="Action Plan" />
        </div>
        <div className="content">
          <h2>Action Plan</h2>
          <p><strong>The research was conducted between January 2021 — June 2023. We aimed to hear from a range of stakeholders in Thorncliffe Park and Flemingdon Park.</strong></p>
          <p><strong>Two primary stakeholder groups include:</strong></p>
          <ol>
            <li>Workers involved in all local food programs, including food banks, community farms and gardens, and grassroots initiatives. We intentionally engaged with both agency staff as well as volunteers leading grassroots initiatives.</li>
            <li>Residents experiencing food insecurity.</li>
          </ol>
        </div>
      </section>

      <section className="team-members">
        <h2>Team Members</h2>
        <div className="team-grid">
          <div className="team-member-card">
            <img src={luannImg} alt="Luann Good Gingrich" />
            <h3>Luann Good Gingrich</h3>
            <p>Professor, York University and Director, Global Labour Research Centre.</p>
          </div>
          <div className="team-member-card">
            <img src={omarImg} alt="Omar Khan" />
            <h3>Omar Khan</h3>
            <p>Coordinator, Engaged Communities and advocate for refugee newcomers</p>
          </div>
          <div className="team-member-card">
            <img src={safeeraImg} alt="Safeera Hatia" />
            <h3>Safeera Hatia</h3>
            <p>Community Researcher, resident and co-founder, Friends of Thorncliffe Park</p>
          </div>
        </div>
      </section>

      <section className="research-report">
        <h2>Research Report</h2>
        <p>Access the full report and executive summary here!</p>
        <a href="https://drive.google.com/open?id=164Xmyw9_4-CXNy9bDpjNHcbw3LB5l2JM&usp=drive_fs" target="_blank" rel="noopener noreferrer">Executive Summary</a>
        <a href="https://drive.google.com/file/d/16kI8PQwdcJub4PZi6A5drXkgXQl25Hir/view?usp=sharing" target="_blank" rel="noopener noreferrer">Full Report</a>
      </section>
    </div>
  );
};

export default Research;
