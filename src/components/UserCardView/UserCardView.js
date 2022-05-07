import React from 'react';
import styles from './UserCardView.module.css';

import { userIcon } from '../../assets/img';

const UserCardView = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image_container}>
        <img src={userIcon} alt='user' />
      </div>
      <div>
        <h5>Username</h5>
        <h5>Age</h5>
        <h5>State</h5>
      </div>
    </div>
  );
};

export default UserCardView;
