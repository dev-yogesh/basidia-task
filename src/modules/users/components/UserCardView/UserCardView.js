import React from 'react';

import { userIcon } from '../../../../assets/img';
import { getAge } from '../../../../utility/utility';
import styles from './UserCardView.module.css';

/**
 * function to render user card view component
 * @param {*} user: user details
 * @returns
 */
const UserCardView = ({ user }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image_container}>
        <img src={userIcon} alt='user' />
      </div>

      <div>
        <h5>{user?.username}</h5>
        <h5>{getAge(user?.dob)}</h5>
        <h5>{user?.state}</h5>
      </div>
    </div>
  );
};

export default UserCardView;
