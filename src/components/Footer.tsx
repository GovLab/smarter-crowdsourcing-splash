import React from 'react';

const Footer: React.FC = () => (
  <footer className='footer'>
    <div className="row expanded footer--darken">
      <div className="column large-4 on-small-center">
        <h5>Sections</h5>
      </div>
      <div className="column large-4 partner-no-show">
        <h5></h5>
      </div>
      <div className="column large-4 partner-no-show">
        <h5 className="padding-left">About</h5>
      </div>
    </div>
    <div className="row expanded align-center">
      <div className="column large-4 small-12">
        <nav className="footer__nav">
          <a href="/about.html">About</a>
          <a href="http://anticorruption.smartercrowdsourcing.org/">Anti-Corruption</a>
          <a href="http://zika.smartercrowdsourcing.org/">Zika</a>
          <a href="#">Cotopaxi</a>
          <a href="mailto:info@thegovlab.org">Contact</a>
        </nav>
      </div>
      <div className="column large-4 small-12">
        <div className="footer-logo">
          <img src="/images/smarter-crowdsourcing-logo-03.svg" alt="" />
        </div>
      </div>
      <div className="column large-4 small-12">
        <p className="footer-about">Smarter Crowdsourcing is a method that combines rigorous problem definition with crowdsourcing to attract diverse ideas from global experts and rapidly develop those ideas into actionable proposals.</p>
      </div>
    </div>
  </footer>
);

export default Footer;