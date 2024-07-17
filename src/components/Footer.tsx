import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  menu: Array<{ label: string; link: string }>;
  footer: string;
}

const Footer: React.FC<FooterProps> = ({ menu, footer }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const svgUrl = 'https://content.smartercrowdsourcing.org/assets/839923d2-7777-4c6c-ba88-ed16a5d1d3a5';

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
      <div className={`${styles.row} ${styles.footerDarken}`}>
        <div className={styles.column}>
          <h5>Sections</h5>
        </div>
        <div className={styles.column}>
          <h5>About</h5>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <nav className={styles.footerNav}>
            {menu.map((item, index) => (
              <a key={index} href={item.link}>{item.label}</a>
            ))}
          </nav>
        </div>
        <div className={styles.column}>
          <div className={styles.footerLogo}>
            {svgContent ? (
              <div
                className={styles.projectLogo}
                dangerouslySetInnerHTML={{ __html: svgContent }}
              />
            ) : (
              <img
                className={styles.projectLogo}
                src={svgUrl}
                alt="Footer Logo"
              />
            )}
          </div>
        </div>
        <div className={styles.column}>
          <p className={styles.footerAbout} dangerouslySetInnerHTML={{ __html: footer }}></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
