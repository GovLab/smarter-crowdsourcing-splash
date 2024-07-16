import React, { useState, useEffect } from 'react';
import { Project as ProjectType, HomePage, Partner } from '../types';
import Project from '../components/Project/Project';
import Methodology from '../components/Methodology';
import Partners from '../components/Partners';
import { fetchHomePage, fetchProjects, fetchPartners } from '../api';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const [homeData, setHomeData] = useState<HomePage | null>(null);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [homeData, projectsData, partnersData] = await Promise.all([
          fetchHomePage(),
          fetchProjects(),
          fetchPartners()
        ]);
        setHomeData(homeData);
        setProjects(projectsData);
        setPartners(partnersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!homeData || projects.length === 0 || partners.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.homePage}>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
      <Methodology />
      <Partners partners={partners} />
    </div>
  );
};

export default Home;
