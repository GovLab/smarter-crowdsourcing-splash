import React from 'react';
import styles from './Header.module.css';

interface HeaderContentProps {

  content: string;
  header_buttons: Array<{ label: string; link: string }>;
}

const HeaderContent: React.FC<HeaderContentProps> = ({ content,header_buttons  }) => {
  
  return (
    <div className="row expanded collapse ">
    <div className="column large-12' small-12  ">
      <div className="panel panel--top-left centered-panel  ">
        <div className="styles panel--top-left__text ">
            {/* <div className={styles['smc-logo']}>
              <img 
                style={{ maxWidth: '80%' }} 
                src={content.methodology_graph.id} 
                alt="Smarter Crowdsourcing Mini"
              />
            </div> */}
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
            <div className='smc-buttons'>
              {header_buttons.map((button, index) => (
                <a 
                  key={index}
                  className={styles.button} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  href={button.link}
                >
                  {button.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;