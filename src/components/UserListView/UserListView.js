import React from 'react';
import styles from './UserListView.module.css';

import { userIcon } from '../../assets/img';
import { getAge } from '../../utility/utility';

const UserListView = ({ user }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image_container}>
        <img src={userIcon} alt='user' />
      </div>
      <div>
        <h5>
          {user?.username} - {getAge(user?.dob)} - {user.state}
        </h5>
      </div>
    </div>
  );
};

export default UserListView;
