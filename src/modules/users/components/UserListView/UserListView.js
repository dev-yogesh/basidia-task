import React from 'react';

import { userIcon, menuIcon } from '../../../../assets/img';
import { getAge } from '../../../../utility/utility';
import styles from './UserListView.module.css';

const UserListView = ({ user }) => {
  return (
    <div className={styles.card}>
      <div className={styles.user_info}>
        <div className={styles.card_image_container}>
          <img src={userIcon} alt='user' />
        </div>
        <div>
          <h5>
            {user?.username} - {getAge(user?.dob)} - {user.state}
          </h5>
        </div>
      </div>
      <div>
        <img src={menuIcon} alt='menuIcon' />
      </div>
    </div>
  );
};

export default UserListView;
