import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import styles from './Users.module.css';

import UserCardView from '../UserCardView/UserCardView';
import UserListView from '../UserListView/UserListView';

const Users = () => {
  return (
    <div className={styles.container}>
      <h4>Users</h4>

      <div className={styles.inner_container}>
        <Card height='100%' width='100%'>
          <div className={styles.content_container}>
            <div className={styles.search_section}>
              <h5>Search</h5>
              <div className={styles.input_container}>
                <input
                  type='text'
                  name='search'
                  placeholder='Search user by name...'
                />
              </div>
            </div>

            <div className={styles.card_section}>
              <h5>Card View</h5>
              <div className={styles.card_view_container}>
                <UserCardView />
                <UserCardView />
                <UserCardView />
                <UserCardView />
                <UserCardView />
              </div>
            </div>

            <div className={styles.card_section}>
              <h5>List View</h5>
              <div className={styles.list_view_container}>
                <UserListView />
                <UserListView />
                <UserListView />
                <UserListView />
                <UserListView />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('state', state);
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    // addAdmin: data => {
    //     return dispatch(addAdminRequest(data)).then(
    //         res => {
    //             return Promise.resolve(res);
    //         },
    //         error => {
    //             return Promise.reject(error);
    //         }
    //     );
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
