import React from 'react';
import styles from './Methodology.module.css';

interface MethodologyProps {
  text: string;
  graph: string;
}

const Methodology: React.FC<MethodologyProps> = ({ text, graph }) => (
  <section className={styles.methodology}>
    <div className={styles.row}>
      <div className={styles.column}>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <div className={styles.column}>
        <img className={styles.methodologyImg} src={`https://content.smartercrowdsourcing.org/assets/${graph}`} alt="Methodology Graph" />
      </div>
    </div>
  </section>
);

export default Methodology;