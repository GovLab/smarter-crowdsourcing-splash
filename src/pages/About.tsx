// src/pages/About.tsx
import React, { useState, useEffect } from 'react';
import { HomePage } from '../types';
import Header from '../components/Header';
import Methodology from '../components/Methodology';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { fetchHomePage } from '../api';
import stylesHome from './Home.module.css';
import stylesAbout from './About.module.css';




const About: React.FC = () => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const svgUrl = 'https://content.smartercrowdsourcing.org/assets/839923d2-7777-4c6c-ba88-ed16a5d1d3a5';
  const [homeData, setHomeData] = useState<HomePage | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homeData = await fetchHomePage();
        setHomeData(homeData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch(svgUrl);
        let text = await response.text();
        if (text.includes('<svg')) {
          setSvgContent(text);
        }
      } catch (error) {
        console.error('Error fetching SVG:', error);
      }
    };

    fetchSvg();
  }, []);

  if (!homeData) {
    return <div>Loading...</div>;
  }

  const { partner: partners, methodology, methodology_graph } = homeData;


  
  return (
    <>
    <SEO 
    title={'Smartercrowdsourcing'}
    description={homeData.about}
    image={'https://content.smartercrowdsourcing.org/assets/839923d2-7777-4c6c-ba88-ed16a5d1d3a5'}
    url={'https://smartercrowdsourcing.org/'}
  />
    <div className={stylesHome.homePage}>
    <Header menu={homeData.menu} />
    <div className={stylesAbout.logoWrapper}>
      {svgContent ? (
        <div
          dangerouslySetInnerHTML={{ __html: svgContent }}
          className={stylesAbout.logo}
        />
      ) : (
        <img

          src={svgUrl}
          alt="Smartercrowdsourcing Logo"
        />
      )}
    </div>
    <div className={`${stylesHome.divider} ${stylesHome.dividerBlue}`}>
      <h1>About</h1>
    </div>
    <div className={stylesHome.row}>
    <div className={stylesHome.column}>
    <p dangerouslySetInnerHTML={{ __html: homeData.about }}></p>
    </div>
    </div>
    <div className={`${stylesHome.divider} ${stylesHome.dividerBlue}`}>
      <h1>Our Methodology</h1>
    </div>
    <div className={stylesHome.methodology}>
      <Methodology text={methodology} graph={methodology_graph.id} />
    </div>
    <div className={`${stylesHome.divider} ${stylesHome.dividerBlue}`}>
      <h1>Partners</h1>
    </div>
      <Partners partners={partners} />
    <Footer menu={homeData.menu} about={homeData.about} />
  </div>
  </>
  );
};

export default About;