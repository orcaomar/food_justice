import React from 'react';
import './Quotes.css';

const Quotes = () => {
  return (
    <section className="quotes-container" aria-label="Community quotes">
      <blockquote className="quote">
        <p>"You feel like you can't provide for your family, because of food insecurity. It does take a toll on your mental health. Like if you can't afford to fend for your family, it is depressing, right?"</p>
        <cite className="quote-author">— Neighbourhood Resident</cite>
      </blockquote>
      <blockquote className="quote">
        <p>"In communities where income levels are depressed, opportunities are few and far between, these communities have to make choices on a daily basis about what goes into their bodies. It affects their health. I mean, that's the reality…. What the challenge has been – and again, it's obvious what has happened – is that the pandemic, really, it laid bare the inequities in our system, It laid bare the systemic bias in our system, and its impact in places like Flemingdon, like Malvern, like Regent Park – the places that are struggling. But we didn't do anything different. What did we do? What did the government do? What did people do? They just give a little bit more money. That's it."</p>
        <cite className="quote-author">— Food Security Worker</cite>
      </blockquote>
    </section>
  );
};

export default Quotes;
