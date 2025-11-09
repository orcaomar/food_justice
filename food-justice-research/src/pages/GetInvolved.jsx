import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { getInvolvedData } from "../data/GetInvolvedData";
import "./GetInvolved.css";

const GetInvolved = () => {
  useDocumentTitle('Get Involved | Flemingdon & Thorncliffe Food Justice | Toronto, Canada');
  return (
    <div className="get-involved">
      <section className="masthead" style={{ backgroundImage: `url(${getInvolvedData.masthead.backgroundImage})` }}>
        <h1>{getInvolvedData.masthead.title}</h1>
        <p>{getInvolvedData.masthead.subtitle}</p>
      </section>

      <section className="banner">
        <p>{getInvolvedData.banner.text}</p>
      </section>

      <section className="interactive-map">
        <h2>{getInvolvedData.interactiveMap.title}</h2>
        <iframe src={getInvolvedData.interactiveMap.mapUrl} width="800" height="600"></iframe>
        <a href={getInvolvedData.interactiveMap.buttonUrl} target="_blank" rel="noopener noreferrer">
          <button>{getInvolvedData.interactiveMap.buttonText}</button>
        </a>
      </section>

      <section className="faq">
        <h2>{getInvolvedData.faq.title}</h2>
        {getInvolvedData.faq.questions.map((item, index) => (
          <div key={index} className="faq-item">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default GetInvolved;
