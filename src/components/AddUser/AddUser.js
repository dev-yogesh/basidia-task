import React, { useState } from 'react';
import { STATE_LIST } from '../../utility/constants';
import Card from '../Card/Card';
import styles from './AddUser.module.css';

const AddUser = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    dob: '',
    state: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const data = { ...user };
    data[name] = value;
    console.log(data);
    setUser(data);
  };

  return (
    <div className={styles.container}>
      <h4>AddUser</h4>

      <div className={styles.form_container}>
        <Card height='100%' width='100%'>
          <div className={styles.form_content}>
            <form onSubmit={handleSubmit}>
              <div className={styles.input_outer_container}>
                <div className={styles.input_container}>
                  <label htmlFor='username'>Username</label>
                  <input
                    type='text'
                    name='username'
                    id='username'
                    value={user.username}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.input_container}>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.input_container}>
                  <label htmlFor='phone'>Phone</label>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    value={user.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.input_container}>
                  <label htmlFor='dob'>DOB</label>
                  <input
                    type='date'
                    name='dob'
                    id='dob'
                    value={user.dob}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.input_container}>
                  <label htmlFor='state'>State</label>
                  <select
                    name='state'
                    id='state'
                    value={user.state}
                    onChange={handleChange}
                  >
                    {STATE_LIST.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.input_container}>
                  <button type='submit'>Create User</button>
                </div>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AddUser;
