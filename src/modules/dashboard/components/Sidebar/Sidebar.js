import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Card from '../../../../utility/components/Card/Card';
import {
  appLogo,
  addUser,
  users,
  weather,
  addUserWhite,
  usersWhite,
  weatherWhite,
} from '../../../../assets/img';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [path, setPath] = useState(window.location.pathname);

  return (
    <section className={styles.sidebar}>
      <Card>
        <div className={styles.sidebar_content}>
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
      </Card>
    </section>
  );
};

export default Sidebar;
