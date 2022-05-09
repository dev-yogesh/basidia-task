import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { STATE_LIST } from '../../../../utility/constants';
import Card from '../../../../utility/components/Card/Card';
import { setDataToLocalStorage } from '../../../../utility/utility';
import styles from './AddUser.module.css';

/**
 * function to render add-user form
 * @returns
 */
const AddUser = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Enter valid email id'),
    phone: Yup.string()
      .required('Phone is required')
      .min(10, 'Enter a valid phone number (10 digits)')
      .max(10, 'Enter a valid phone number (10 digits)'),
    dob: Yup.string().required('DOB is required'),
    state: Yup.string().required('State is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      phone: '',
      dob: '',
      state: '',
    },
    validationSchema,
    onSubmit: (data, { resetForm }) => {
      setDataToLocalStorage(data);
      resetForm();
    },
  });

  return (
    <div className={styles.container}>
      <h4>Add User</h4>

      <Card>
        <div className={styles.form_container}>
          <div className={styles.form_content}>
            <form onSubmit={formik.handleSubmit}>
              <div className={styles.input_outer_container}>
                <div className={styles.input_container}>
                  <label htmlFor='username'>Username</label>
                  <input
                    type='text'
                    name='username'
                    id='username'
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    className={
                      formik.errors.username && formik.touched.username
                        ? styles.error_input
                        : ''
                    }
                  />
                </div>
                {formik.errors.username && formik.touched.username && (
                  <div className={styles.error_container}>
                    <p>{formik.errors.username}</p>
                  </div>
                )}

                <div className={styles.input_container}>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='text'
                    name='email'
                    id='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className={
                      formik.errors.email && formik.touched.email
                        ? styles.error_input
                        : ''
                    }
                  />
                </div>
                {formik.errors.email && formik.touched.email && (
                  <div className={styles.error_container}>
                    <p>{formik.errors.email}</p>
                  </div>
                )}

                <div className={styles.input_container}>
                  <label htmlFor='phone'>Phone</label>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    className={
                      formik.errors.phone && formik.touched.phone
                        ? styles.error_input
                        : ''
                    }
                  />
                </div>
                {formik.errors.phone && formik.touched.phone && (
                  <div className={styles.error_container}>
                    <p>{formik.errors.phone}</p>
                  </div>
                )}

                <div className={styles.input_container}>
                  <label htmlFor='dob'>DOB</label>
                  <input
                    type='date'
                    name='dob'
                    id='dob'
                    onChange={formik.handleChange}
                    value={formik.values.dob}
                    className={
                      formik.errors.dob && formik.touched.dob
                        ? styles.error_input
                        : ''
                    }
                  />
                </div>
                {formik.errors.dob && formik.touched.dob && (
                  <div className={styles.error_container}>
                    <p>{formik.errors.dob}</p>
                  </div>
                )}

                <div className={styles.input_container}>
                  <label htmlFor='state'>State</label>
                  <select
                    name='state'
                    id='state'
                    onChange={formik.handleChange}
                    value={formik.values.state}
                    className={
                      formik.errors.state && formik.touched.state
                        ? styles.error_input
                        : ''
                    }
                  >
                    <option value=''>Select State</option>
                    {STATE_LIST.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                {formik.errors.state && formik.touched.state && (
                  <div className={styles.error_container}>
                    <p>{formik.errors.state}</p>
                  </div>
                )}

                <div className={styles.input_container}>
                  <button type='submit'>Create User</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AddUser;
