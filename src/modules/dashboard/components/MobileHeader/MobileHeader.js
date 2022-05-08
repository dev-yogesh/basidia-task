import React from 'react';
import { connect } from 'react-redux';

import { appLogo } from '../../../../assets/img';
import { toggleDrawer } from '../../../../utility/utilityActions';
import styles from './MobileHeader.module.css';

const MobileHeader = ({ toggleDrawerState, open }) => {
  return (
    <section className={styles.mobile_header}>
      <div className={styles.mobile_header_content}>
        <div className={styles.logo}>
          <img src={appLogo} alt='appLogo' />
        </div>

        <div
          className={styles.container}
          onClick={(e) => toggleDrawerState(!open)}
        >
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
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
  return {
    toggleDrawerState: (open) => {
      return dispatch(toggleDrawer(open));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileHeader);
