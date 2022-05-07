import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import styles from './Layout.module.css';
import { logo, addUser, users, weather, userIcon } from '../../assets/img';
import Card from '../Card/Card';

const Layout = () => {
  const memuList = [
    {
      label: 'Add User',
      path: '/add-user',
      icon: addUser,
    },
    {
      label: 'Users',
      path: '/users',
      icon: users,
    },
    {
      label: 'Weather',
      path: '/weather',
      icon: weather,
    },
  ];

  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Card height='100%' width='100%'>
          <div className={styles.logo_container}>
            <img src={logo} alt='logo' />
          </div>

          <div className={styles.menu_container}>
            {memuList.map((menu) => (
              <NavLink
                key={menu.label}
                to={menu.path}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.menu_item} ${styles.active}`
                    : `${styles.menu_item}`
                }
              >
                <div>
                  <img src={menu.icon} alt='icon' />
                </div>
                <div>
                  <h5>{menu.label}</h5>
                </div>
              </NavLink>
            ))}
          </div>
        </Card>
      </div>
      <div className={styles.home}>
        <div className={styles.header}>
          <Card height='100%' width='100%'>
            <div className={styles.header_content}>
              <div>Thu 19 Aug 12:00 AM</div>
              <div className={styles.profile}>
                <h5>Welcome Jhon</h5> <img src={userIcon} alt='user' />
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
