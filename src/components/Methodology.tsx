import React from 'react';

const Methodology: React.FC = () => (
  <section className="methodology">
    <div className="row expanded align-center">
      <div className="column large-6 small-12">
        <h5 className="top">Problem Identification and Definition</h5>
        <p>Using our problem definition methodology, we break down a larger issue into actionable, focused problems. Government partners prioritize among problems, selecting the ones to focus on.</p>
        {/* Add other methodology steps */}
      </div>
      <div className="column large-8 small-12">
        <img className="methodology__img" src="/images/phase-graphic-en.png" alt="Methodology" />
      </div>
    </div>
  </section>
);

export default Methodology;