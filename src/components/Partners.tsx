import React from 'react';
import { Partner as PartnerType } from '../types';

interface PartnersProps {
  partners: PartnerType[];
}

const Partners: React.FC<PartnersProps> = ({ partners }) => (
  <section className="partners">

      {partners.map((partner, index) => (
        <div key={index} className="">
          <div className="img-container">
            <a href={partner.link} target="_blank" rel="noopener noreferrer">
              <img src={`https://content.smartercrowdsourcing.org/assets/${partner.logo}`} alt={partner.name} />
            </a>
          </div>
        </div>
      ))}

  </section>
);

export default Partners;
