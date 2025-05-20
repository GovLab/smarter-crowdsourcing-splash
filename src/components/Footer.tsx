import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

interface FooterProps {
  menu: Array<{ label: string; link: string }>;
  about: string;
}

const Footer: React.FC<FooterProps> = ({ menu, about }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const svgUrl = 'https://directus.theburnescenter.org/assets/839923d2-7777-4c6c-ba88-ed16a5d1d3a5';

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
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <h5>SECTIONS</h5>
          <nav className={styles.footerNav}>
          {menu.map((item, index) => (
  <Link key={index} to={item.link}>
    {item.label}
  </Link>
))}
            
          </nav>
        </div>
        <div className={styles.footerCenter}>
        <div className={styles.footerLogo}>
        <Link to={'/'}>
            {svgContent ? (
              <div
                dangerouslySetInnerHTML={{ __html: svgContent }}
              />
            ) : (
              <img

                src={svgUrl}
                alt="Footer Logo"
              />
            )}
              </Link>
          </div>

        </div>
        <div className={styles.footerRight}>
          <h5>ABOUT</h5>
          <p dangerouslySetInnerHTML={{ __html: about }}></p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <img src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" alt="Creative Commons License" className={styles.ccIcon} />
        <p>This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.</p>
      </div>
    </footer>
  );
};

export default Footer;