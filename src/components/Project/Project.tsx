import React, { useState, useEffect, CSSProperties } from 'react';
import { Project as ProjectType } from '../../types';
import styles from './Project.module.css';

interface ProjectProps extends ProjectType {
  isFullWidth?: boolean;
  isFirst?: boolean;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  icon,
  bgColor,
  link,
  buttons,
  isFullWidth = false,
  isFirst = false
}) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch(`https://content.smartercrowdsourcing.org/assets/${icon}`);
        let text = await response.text();
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

  const projectWrapperStyle: CSSProperties = isFullWidth ? {
    width: '100%',
    backgroundImage: `url(https://content.smartercrowdsourcing.org/assets/${image}?height=400&quality=80)`,
    backgroundColor: 'rgb(44, 71, 88)',
    display: 'flex',
    flexDirection: 'column' as 'column', // Explicitly type as 'column'
    justifyContent: 'flex-start',
  } : {};

  const handleClick = () => {
    if (!isFirst) {
      window.location.href = link;
    }
  };

  const handleMouseEnter = () => {
    if (!isFirst) {
      setHover(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isFirst) {
      setHover(false);
    }
  };

  return (
    <div
    className={`${styles.projectWrapper} ${isFullWidth ? styles.fullWidth : ''}`}
    style={projectWrapperStyle}
    onClick={handleClick}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
      <div className={styles.project} style={projectStyle}>
        {svgContent ? (
      <object 
      type="image/svg+xml"
      data={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgContent)}`}
      className={styles.projectLogo}
    >
      {title} Logo
    </object>
        ) : (
          <img 
            className={styles.projectLogo} 
            src={`https://content.smartercrowdsourcing.org/assets/${icon}`} 
            alt={`${title} Logo`} 
          />
        )}
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectText}>{description}</p>
        {buttons && (
        <div className={styles.buttonRow}>
          {buttons.map((button, index) => (
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
      )}
      </div>
    </div>
  );
};

export default Project;
