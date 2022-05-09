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
import { toggleDrawer } from '../../../../utility/utilityActions';
import styles from './MobileSidebar.module.css';

/**
 * function to render mobile sidebar component
 * @param {*} open: boolean for drawer state
 * @returns
 */
const MobileSidebar = ({ toggleDrawerState, open }) => {
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
                onClick={() => {
                  setPath('/add-user');
                  toggleDrawerState(!open);
                }}
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
                onClick={() => {
                  setPath('/users');
                  toggleDrawerState(!open);
                }}
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
                onClick={() => {
                  setPath('/weather');
                  toggleDrawerState(!open);
                }}
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

/**
 * function to map redux state to component prop
 * @param {*} state: state
 * @returns
 */
const mapStateToProps = (state) => {
  return {
    open: state?.utility?.open,
  };
};

/**
 * function to map action creators to component prop
 * @param {*} dispatch: function to dispatch action
 * @returns
 */
const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawerState: (open) => {
      return dispatch(toggleDrawer(open));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileSidebar);
