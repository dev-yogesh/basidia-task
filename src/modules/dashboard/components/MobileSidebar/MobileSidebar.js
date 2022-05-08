import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {
  appLogo,
  addUser,
  users,
  weather,
  addUserWhite,
  usersWhite,
  weatherWhite,
} from '../../../../assets/img';
import styles from './MobileSidebar.module.css';

const MobileSidebar = ({ open }) => {
  const [path, setPath] = useState(window.location.pathname);

  return (
    <section className={open ? styles.sidebar : styles.sidebar_hide}>
      <div className={open ? styles.sidebar_content : styles.hide}>
        <div className={styles.logo}>
          <img src={appLogo} alt='appLogo' />
        </div>

        <nav>
          <ul>
            <li>
              <NavLink
                to='/add-user'
                className={({ isActive }) => (isActive ? styles.active : '')}
                onClick={() => setPath('/add-user')}
              >
                <img
                  src={path === '/add-user' ? addUserWhite : addUser}
                  alt='addUserIcon'
                />
                <h6>Add User</h6>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/users'
                className={({ isActive }) => (isActive ? styles.active : '')}
                onClick={() => setPath('/users')}
              >
                <img
                  src={path === '/users' ? usersWhite : users}
                  alt='usersIcon'
                />
                <h6>Users</h6>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/weather'
                className={({ isActive }) => (isActive ? styles.active : '')}
                onClick={() => setPath('/weather')}
              >
                <img
                  src={path === '/weather' ? weatherWhite : weather}
                  alt='weatherIcon'
                />
                <h6>Weather</h6>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    open: state?.utility?.open,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileSidebar);
