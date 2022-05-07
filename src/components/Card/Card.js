import React from 'react';
import styles from './Card.module.css';

const Card = ({ height, width, children }) => {
  return (
    <div className={styles.card} style={{ height: height, width: width }}>
      {children}
    </div>
  );
};

export default Card;
