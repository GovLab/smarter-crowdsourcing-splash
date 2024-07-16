import React from 'react';

const Header: React.FC = () => (
  <header className="top-bar top-bar--transparent">
    <span className="top-bar__button js-trigger-menu">menu</span>
    <nav className="main-menu js-target-menu main-menu--left">
      <a href="/">Home</a>
      <a href="/about.html">About</a>
      <a href="http://anticorruption.smartercrowdsourcing.org/">Anti-Corruption</a>
      <a href="http://zika.smartercrowdsourcing.org/">Zika</a>
      <a href="http://cotopaxi.smartercrowdsourcing.org/">Cotopaxi</a>
      <a href="mailto:info@thegovlab.org">Contact</a>
    </nav>
    <a className="top-bar__logo" href="/index.html">
      <img id="govlab-logo" src="/images/the-govlab-logo-white.svg" alt="The GovLab" />
      <img src="/images/burnes-center-logo.png" alt="The GovLab" />
    </a>
  </header>
);

export default Header;