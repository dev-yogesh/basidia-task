import React from 'react';

import Card from '../../../../utility/components/Card/Card';
import { userIcon } from '../../../../assets/img';
import { useDateTime } from '../../../../utility/hooks/useDateTime';
import styles from './Header.module.css';

/**
 * function to render header component
 * @returns
 */
const Header = () => {
  const [dateTime] = useDateTime();

  return (
    <section className={styles.header}>
      <Card>
        <div className={styles.header_content}>
          <h1>{dateTime}</h1>

          <div className={styles.profile}>
            <h2>Welcome Jhon</h2>
            <img src={userIcon} alt='userIcon' />
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Header;
