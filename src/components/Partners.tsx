// src/components/Partners.tsx
import React from 'react';
import { Partner as PartnerType } from '../types';
import styles from '../pages/Home.module.css';

interface PartnersProps {
  partners: PartnerType[];
}

const Partners: React.FC<PartnersProps> = ({ partners }) => (
  <section className={styles.partners}>
    {partners.map((partner, index) => (
      <div key={index} className={styles.imgContainer}>
        <a href={partner.link} target="_blank" rel="noopener noreferrer">
          <img src={`https://directus.theburnescenter.org/assets/${partner.logo}`} alt={partner.name} />
        </a>
      </div>
    ))}
  </section>
);

export default Partners;