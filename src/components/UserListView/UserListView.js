import React from 'react';
import styles from './UserListView.module.css';

import { userIcon } from '../../assets/img';

const UserListView = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image_container}>
        <img src={userIcon} alt='user' />
      </div>
      <div>
        <h5>Username - Age - State</h5>
      </div>
    </div>
  );
};

export default UserListView;
