import React from 'react';

import styles from './Card.module.css';

/**
 * function to render card component
 * @param {*} children: children prop
 * @returns
 */
const Card = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
