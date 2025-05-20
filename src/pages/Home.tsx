import React, { useState, useEffect } from 'react';
import { HomePage } from '../types';
import Header from '../components/Header';
import Project from '../components/Project/Project';
import Methodology from '../components/Methodology';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

import { fetchHomePage } from '../api';
import styles from './Home.module.css';


const Home: React.FC = () => {
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

  if (!homeData) {
    return <div>Loading...</div>;
  }

  const { projects, partner: partners, methodology, methodology_graph } = homeData;
  const isOddNumber = projects.length % 2 !== 0;

  return (
    <>
    <SEO 
    title={projects[0].title}
    description={projects[0].description}
    image={`https://directus.theburnescenter.org/assets/${homeData.methodology_graph.id}`}
    url={'https://smartercrowdsourcing.org/'}
  />
    <div className={styles.homePage}>
      <Header menu={homeData.menu} />
      <div className={styles.splashPage}>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <Project
              key={project.id}
              {...project}
              isFullWidth={isOddNumber && index === 0}
              isFirst={isOddNumber && index === 0}
            />
          ))}
        </div>
      </div>
      <div className={`${styles.divider} ${styles.dividerBlue}`}>
        <h1>Our Methodology</h1>
      </div>
      <div className={styles.methodology}>
        <Methodology text={methodology} graph={methodology_graph.id} />
      </div>
      <div className={`${styles.divider} ${styles.dividerBlue}`}>
        <h1>Partners</h1>
      </div>
        <Partners partners={partners} />
      <Footer menu={homeData.menu} about={homeData.about} />
    </div>
    </>
  );
};

export default Home;