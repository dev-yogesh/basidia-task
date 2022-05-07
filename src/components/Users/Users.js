import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import styles from './Users.module.css';

import UserCardView from '../UserCardView/UserCardView';
import UserListView from '../UserListView/UserListView';

import { getUsers } from './UserActions';

const Users = ({ getUsersData, usersList }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getUsersData(searchQuery);
    //eslint-disable-next-line
  }, [searchQuery]);

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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.card_section}>
              <h5>Card View</h5>
              <div className={styles.card_view_container}>
                {usersList?.length > 0 ? (
                  <>
                    {usersList.map((user) => (
                      <UserCardView key={user.email} user={user} />
                    ))}
                  </>
                ) : (
                  <h5>No records found</h5>
                )}
              </div>
            </div>

            <div className={styles.card_section}>
              <h5>List View</h5>
              <div className={styles.list_view_container}>
                {usersList?.length > 0 ? (
                  <>
                    {usersList.map((user) => (
                      <UserListView key={user.email} user={user} />
                    ))}
                  </>
                ) : (
                  <h5>No records found</h5>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    usersList: state?.users?.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersData: (query) => {
      return dispatch(getUsers(query));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
