import React from 'react';
import './CommunityIdeas.css';

const CommunityIdeas = () => {
  return (
    <section className="community-ideas">
      <h2>Community Ideas</h2>
      <p>Our research is grounded in the knowledge and expertise of community members. We are committed to sharing our research findings with the communities we work with and to supporting their efforts to build a more just and equitable food system.</p>
      <div className="ideas-cards">
        <div className="card">
          <h3>Community Food Hubs</h3>
          <p>Community food hubs can provide a space for community members to access healthy, affordable, and culturally appropriate food. They can also provide a space for community members to come together to share food, knowledge, and skills.</p>
        </div>
        <div className="card">
          <h3>Community Gardens</h3>
          <p>Community gardens can provide a space for community members to grow their own food. They can also provide a space for community members to come together to share food, knowledge, and skills.</p>
        </div>
        <div className="card">
          <h3>Food Policy Councils</h3>
          <p>Food policy councils can provide a space for community members to come together to advocate for policies that support a more just and equitable food system.</p>
        </div>
      </div>
    </section>
  );
};

export default CommunityIdeas;
