import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import MobileHeader from '../MobileHeader/MobileHeader';
import MobileSidebar from '../MobileSidebar/MobileSidebar';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <MobileHeader />

      <Sidebar />

      <MobileSidebar />

      <div className={styles.dashboard}>
        <Header />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
