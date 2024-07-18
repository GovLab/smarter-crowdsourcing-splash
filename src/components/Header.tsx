import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  menu: Array<{ label: string; link: string }>;
}

const Header: React.FC<HeaderProps> = ({ menu }) => {
  const setGovlabLogo = useState<string | null>(null)[1];

  const govlabLogoUrl = 'https://content.smartercrowdsourcing.org/assets/8eaa4206-808d-48be-b7b0-be7912b8f74b';
  const burnesCenterLogoUrl = 'https://content.smartercrowdsourcing.org/assets/e8582384-957d-46d1-92e7-8d0dce0a27f2';

  useEffect(() => {
    const fetchGovLabLogo = async () => {
      try {
        const response = await fetch(govlabLogoUrl);
        const text = await response.text();
        setGovlabLogo(text);
      } catch (error) {
        console.error('Error fetching GovLab logo:', error);
      }
    };

    fetchGovLabLogo();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header className={styles.header}>
    <div className={styles.menuButton} onClick={toggleMenu}>
      <span className={styles.hamburger}>&#9776;</span>
    </div>
      <nav className={`${styles.headerNav} ${isMenuOpen ? styles.showMenu : ''}`}>
    {menu.map((item, index) => (
      <a key={index} href={item.link}>{item.label}</a>
    ))}
  </nav>
      {
      <div className={styles.logos}>
        <img 
          src={govlabLogoUrl} 
          alt="The Govlab" 
          className={styles.govlabLogo}
        />
        <img 
          src={burnesCenterLogoUrl} 
          alt="Burnes Center" 
          className={styles.burnesCenterLogo}
        />
      </div>}
    </header>
  );
};

export default Header;