import React, { useState, useEffect } from 'react';
import { Project as ProjectType } from '../../types';
import styles from './Project.module.css';

const Project: React.FC<ProjectType> = ({
  title,
  description,
  image,
  icon,
  bgColor,
  link,
  buttons
}) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch(`https://content.smartercrowdsourcing.org/assets/${icon}`);
        const text = await response.text();
        if (text.includes('<svg')) {
          setSvgContent(text);
        }
      } catch (error) {
        console.error('Error fetching SVG:', error);
      }
    };

    fetchSvg();
  }, [icon]);

  const projectStyle = {
    backgroundImage: `url('https://content.smartercrowdsourcing.org/assets/${image}?height=400&quality=80')`,
    backgroundColor: hover ? '#FFAA00' : bgColor,
  };

  return (
    <div 
      className={styles.projectWrapper} 
      onClick={() => window.location.href = link}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={styles.project} style={projectStyle}>
        {svgContent ? (
          <div 
            className={styles.projectLogo}
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        ) : (
          <img 
            className={styles.projectLogo} 
            src={`https://content.smartercrowdsourcing.org/assets/${icon}`} 
            alt={`${title} Logo`} 
          />
        )}
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectText}>{description}</p>
        {buttons && buttons.map((button, index) => (
          <div key={index} className={styles.buttonWrapper}>
            <button 
              className={styles.projectButton} 
              onClick={(e) => {
                e.stopPropagation();
                window.open(button.link, '_blank');
              }}
            >
              {button.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
