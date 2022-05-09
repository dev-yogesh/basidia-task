import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { searchIcon } from '../../../../assets/img';
import Card from '../../../../utility/components/Card/Card';
import UserCardView from '../UserCardView/UserCardView';
import UserListView from '../UserListView/UserListView';
import { getUsers } from '../../userActions';
import styles from './Users.module.css';

/**
 * function to render users component
 * @param {*} getUsersData: function to get users data
 * @param {*} usersList: users list
 * @returns
 */
const Users = ({ getUsersData, usersList }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getUsersData(searchQuery);
    //eslint-disable-next-line
  }, [searchQuery]);

  return (
    <div className={styles.container}>
      <h4>Users</h4>

      <Card>
        <div className={styles.inner_container}>
          <div className={styles.content_container}>
            <div className={styles.search_section}>
              <h5>Search</h5>
              <div className={styles.input_container}>
                <div className={styles.search_container}>
                  <input
                    type='text'
                    name='search'
                    placeholder='Search user by name...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <img src={searchIcon} alt='searchIcon' />
                </div>
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
        </div>
      </Card>
    </div>
  );
};

/**
 * function to map redux state to component prop
 * @param {*} state: state
 * @returns
 */

const mapStateToProps = (state) => {
  return {
    usersList: state?.users?.users,
  };
};

/**
 * function to map action creators to component prop
 * @param {*} dispatch: function to dispatch action
 * @returns
 */
const mapDispatchToProps = (dispatch) => {
  return {
    getUsersData: (query) => {
      return dispatch(getUsers(query));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
