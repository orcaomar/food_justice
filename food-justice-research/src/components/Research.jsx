import React from 'react';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import './Research.css';
import headerBg from '../assets/research/DQaUHWzldUNQUDV8Bk1igtA3s.jpg';
import projectGoalsImg from '../assets/research/cjRR1Ssh7HNarcSqiHBa4XK6Us.jpg?w=400;800;1200&format=webp;jpg&srcset';
import actionPlanImg from '../assets/research/ZmnNohA0Ep8HWcizFZaeBOYFHg.jpg?w=400;800;1200&format=webp;jpg&srcset';
import luannImg from '../assets/research/iEPxox514vmq2re5m1VYua1nYY.jpeg?w=200;400;600&format=webp;jpeg&srcset';
import omarImg from '../assets/research/mrPmoma8Y0m7QjiDXyKdr7Imc.jpg?w=200;400;600&format=webp;jpg&srcset';
import safeeraImg from '../assets/research/8O5XGyZcf1zQnohczPYDF1ceMA.png?w=200;400;600&format=webp;png&srcset';
import Accordion from './Accordion';
import ResponsiveImage from './ResponsiveImage';

const Research = () => {
  useDocumentTitle('Research | Flemingdon & Thorncliffe Food Justice | Toronto, Canada');
  return (
    <div className="research-container">
      <div className="masthead" style={{ backgroundImage: `url(${headerBg})` }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Our Research</h1>
          <p>This research – past and present – belongs to the community. We designed our research methods and questions to address research needs identified by residents and workers.</p>
        </div>
      </div>

      <section className="what-we-learned">
        <h2>What We Learned</h2>
      </section>

      <section className="testimonials">
        <div className="card">
          <h3><Link to="/challenges/increasing-and-deepening-food-insecurity">Increasing and deepening food insecurity</Link></h3>
          <p>Many more individuals and families in Flemingdon Park and Thorncliffe Park rely on emergency food distribution services since the ongoing dual crisis – public health and inflation – of the pandemic. And food insecurity is about so much more than food.</p>
        </div>
        <div className="card">
          <h3><Link to="/challenges/stigmatization">The stigmatization, shame, and indignity of food insecurity</Link></h3>
          <p>Charity, in the form of emergency food distribution programs, comes with surveillance, judgment, and devaluation, and does nothing to address underlying needs.</p>
        </div>
        <div className="card">
          <h3><Link to="/challenges/emergency-food-charity">Emergency Food Charity</Link></h3>
          <p>Residents encouraged researchers and workers to adopt a self-critical perspective, to consider the ways in which we are part of the system that maintains food insecurity for certain individuals and groups.</p>
        </div>
        <div className="card">
          <h3><Link to="/challenges/unaffordability">The unaffordability of everyday necessities</Link></h3>
          <p>A devastating reality for families is high (and rising) rent, even for small and unsuitable housing; increased food prices, especially since the pandemic; in combination with steadily inadequate (or declining) family income.</p>
        </div>
        <div className="card">
          <h3><Link to="/challenges/competition-power-imbalance">Structured competition, power imbalances, and fragmentation</Link></h3>
          <p>Cooperation and collaboration among agencies and grassroots initiatives are undermined by competitive and short-term funding of social programs and barriers to decision-making and influence.</p>
        </div>
        <div className="card">
          <h3><Link to="/challenges/labour-market-exploitation">Labour market exclusion and exploitation</Link></h3>
          <p>Employment opportunities, especially for immigrants and refugees, are limited to low-wage precarious jobs. Credentials are often not recognized.</p>
        </div>
        <div className="card">
          <h3><Link to="/challenges/poverty-corporate-greed">Every day and every night, poverty feeds corporate greed</Link></h3>
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
          <ResponsiveImage src={projectGoalsImg} alt="Project Goals" />
        </div>
      </section>

      <section className="action-plan">
        <div className="image-container">
          <ResponsiveImage src={actionPlanImg} alt="Action Plan" />
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

      <section className="research-methods">
        <h2>Research Methods</h2>
        <Accordion
          title="Literature Review and Assessment"
          content="The team researched food justice in various online sources, focusing on articles from 2019-2022 mainly about Canada. We found many articles, but only some were relevant to our topic. A student produced a literature review (add link to literature review when we have it)."
        />
        <Accordion
          title="Previous Community Research"
          content="Flemingdon & Thorncliffe Food Security Network: Closing the Food Access Gaps in the Flemingdon Park & Thorncliffe Park Neighbourhoods of Toronto, Canada, September 4th, 2015. Results: based on data, identified 4 causes of food insecurity locally: 'high cost of foods, the availability of foods or lack thereof, the poor quality of foods available, and insufficient education about foods.' Recommendations from research participants included: a food map ('all food-related information in one place'); food education (cooking, health, food handling, gardening); food hubs where there's education and affordable foods and employment opportunities; community gardens/balcony gardens; food trucks; food markets (affordable food at a farmers market like atmosphere); food share good food box; door-to-door delivery 2019 Flemingdon Health Centre and Oriole Food Bank Survey. We were told about this survey but unfortunately the results cannot be found 2021 Survey of Food Bank Participants. During Covid An earlier version of this survey was administered by paper anonymously in Flemingdon Park however the results were not widely shared"
        />
        <Accordion
          title="Environmental Scan"
          content="The community has a group called the Flemingdon Thorncliffe Food Security Network (FTFSN). When the pandemic started, this group worried about more people not having enough food, which led to this study. We talked to almost all the local groups working on food insecurity (please see the Community Resources page), and they gave us advice and many joined our focus groups."
        />
        <Accordion
          title="Qualitative Data Generation"
          content={
            <>
              <p>Qualitative data was generated through the following:</p>
              <ol>
                <li>Participant Observations
                  <p>Observation research at two food banks: TNO Food Collaborative, and Angela James Food Distribution Centre. Community Researchers took detailed field notes, which informed the focus group questions and was analyzed with the focus group qualitative data.</p>
                </li>
                <li>Research Focus Groups
                  <p>The team conducted five focus group discussions with the following:</p>
                </li>
                <li>Two worker groups and three resident groups</li>
              </ol>
              <p>23 participants in total: 11 workers, 12 residents</p>
              <p>[Note]: Focus group discussions were audio-recorded and transcribed for data analysis.</p>
            </>
          }
        />
        <Accordion
          title="Limitations in Research"
          content={
            <>
              <p>As this is qualitative research, we were looking for depth rather than breadth. Specifically, we aimed to deepen our understanding of the experiences and issues related to food insecurity, rather than provide a comprehensive count of the incidence of food insecurity in the community. Our small sample of research participants is purposive workers and residents, rather than representative.</p>
              <p>Because of limited time and budget, we were not able to include the full range of worker or resident perspectives and experiences in our focus group discussions. Specifically, for example, we note that our small sample did not include:</p>
              <ol>
                <li>Seniors</li>
                <li>Youth</li>
                <li>School nutrition program workers</li>
                <li>Refugee newcomer communities (e.g. privately sponsored and government-assisted refugees, those arriving with Permanent Residency status as well as refugee claimants)</li>
              </ol>
            </>
          }
        />
      </section>

      <section className="team-members">
        <h2>Team Members</h2>
        <div className="team-grid">
          <div className="team-member-card">
            <ResponsiveImage src={luannImg} alt="Luann Good Gingrich" />
            <h3>Luann Good Gingrich</h3>
            <p>Professor, York University and Director, Global Labour Research Centre.</p>
          </div>
          <div className="team-member-card">
            <ResponsiveImage src={omarImg} alt="Omar Khan" />
            <h3>Omar Khan</h3>
            <p>Coordinator, Engaged Communities and advocate for refugee newcomers</p>
          </div>
          <div className="team-member-card">
            <ResponsiveImage src={safeeraImg} alt="Safeera Hatia" />
            <h3>Safeera Hatia</h3>
            <p>Community Researcher, resident and co-founder, Friends of Thorncliffe Park</p>
          </div>
        </div>
        <p className="past-team-members">
          Past team members who have made significant contributions to this work include: Darcy MacCallum, Khadija Farooq, Adeena Ali, Shabnam Sheikh, Kashfia Rahman, and Shehnoor Khurram. We are grateful to the members of the community who generously shared their experience, insight, and ideas with us.
        </p>
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
